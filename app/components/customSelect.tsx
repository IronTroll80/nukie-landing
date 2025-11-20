'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './customSelect.module.css';


export default function CustomSelect({
  options = ['k', 'l'],
  value = null,
  onChange = () => {},
  placeholder = 'Select...',
  disabled = false,
  id = undefined,
  className = '',
}) {
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const containerRef = useRef(null);

  const selected = options.find(opt => opt.value === value) || null;

  useEffect(() => {
    if (!open) setHighlightIndex(-1);
  }, [open]);

  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  function toggleOpen() {
    if (disabled) return;
    setOpen(v => !v);
  }

  function handleSelect(opt) {
    if (disabled) return;
    onChange(opt.value);
    setOpen(false);
  }

  function onKeyDown(e) {
    if (disabled) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setHighlightIndex(i => Math.min(options.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setOpen(true);
      setHighlightIndex(i => Math.max(0, i - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (open && highlightIndex >= 0) handleSelect(options[highlightIndex]);
      else setOpen(v => !v);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div
      className={`${styles.container} ${className} ${disabled ? styles.disabled : ''}`}
      ref={containerRef}
      id={id}
    >
      <button
        type="button"
        className={styles.control}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={id ? `${id}-label` : undefined}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        disabled={disabled}
      >
        <span className={selected ? styles.value : styles.placeholder}>
          {selected ? selected.label : placeholder}
        </span>
        <span className={styles.caret} aria-hidden>
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className={styles.options}
          aria-activedescendant={
            highlightIndex >= 0 ? `option-${highlightIndex}` : undefined
          }
        >
          {options.length === 0 && (
            <li className={styles.empty}>
              No options
            </li>
          )}

          {options.map((opt, i) => {
            const isSelected = value === opt.value;
            const isHighlighted = i === highlightIndex;
            return (
              <li
                key={opt.value}
                id={`option-${i}`}
                role="option"
                aria-selected={isSelected}
                className={`${styles.option} ${isSelected ? styles.selected : ''} ${isHighlighted ? styles.highlighted : ''}`}
                onMouseEnter={() => setHighlightIndex(i)}
                onMouseDown={(e) => { e.preventDefault(); /* prevent blur */ handleSelect(opt); }}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

#!/usr/bin/env python3
"""Verify the repository package against SHA256SUMS.txt."""
import hashlib
from pathlib import Path
root=Path(__file__).resolve().parent
errors=[];count=0
for line in (root/'SHA256SUMS.txt').read_text().splitlines():
    expected,name=line.split('  ',1);p=root/name
    if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest()!=expected:errors.append(name)
    count+=1
if errors:raise SystemExit('Different or missing files: '+', '.join(errors))
print(f'Verified {count} files.')

# Header Asset Slots (16-bit)

Drop converted 16-bit PNGs in this folder with these exact names:

- `helmet_16bit.png`
- `speedstripe_16bit.png`
- `seahawks_wordmark_16bit.png`
- `proposal_wordmark_16bit.png`
- `community_wordmark_16bit.png`

The site is already wired to these files in `public/styles.css` via CSS variables.

## 16-bit prep guidance

- Keep assets as PNG with transparency.
- Resize down first, then scale up with nearest-neighbor to keep chunky pixels.
- Limit to Seahawks throwback palette (`#cccbcc`, `#273a92`, `#108040`, black/white).
- Avoid anti-aliasing and soft shadows.

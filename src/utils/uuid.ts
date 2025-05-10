let SIZE = 4096,
  HEX2: any[] = [],
  IDX2 = 0,
  BUFFER: any

for (; IDX2 < 256; IDX2++) {
  HEX2[IDX2] = (IDX2 + 256).toString(16).substring(1)
}

export function uuid() {
  if (!BUFFER || IDX2 + 16 > SIZE) {
    BUFFER = crypto.getRandomValues(new Uint8Array(SIZE))
    IDX2 = 0
  }

  let i = 0,
    tmp,
    out = ''
  for (; i < 16; i++) {
    tmp = BUFFER[i + IDX2]
    if (i == 6) {
      out += HEX2[(tmp & 15) | 64]
    } else if (i == 8) {
      out += HEX2[(tmp & 63) | 128]
    } else {
      out += HEX2[tmp]
    }

    if (i & 1 && i > 1 && i < 11) {
      out += '-'
    }
  }

  IDX2++
  return out
}

/**
 * Generates a custom UUID with a prefix.
 * @param prefix The prefix for the UUID (e.g., "template", "layer").
 * @returns The custom UUID string.
 */
export function generateCustomUuid(prefix: string): string {
  return `${prefix}-${uuid()}`
}

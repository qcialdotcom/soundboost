# /// script
# requires-python = ">=3.9"
# dependencies = ["pillow"]
# ///

from pathlib import Path
from PIL import Image

INPUT_FILE = Path("public/logo.png")
OUTPUT_DIR = Path("public/icon")
ICON_SIZES = [16, 32, 48, 96, 128]


def generate_icons():
    if not INPUT_FILE.exists():
        raise FileNotFoundError(f"Logo not found: {INPUT_FILE}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    with Image.open(INPUT_FILE) as original:
        logo = original.convert("RGBA")

        for size in ICON_SIZES:
            icon = logo.copy()
            icon.thumbnail((size, size), Image.Resampling.LANCZOS)

            canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
            x = (size - icon.width) // 2
            y = (size - icon.height) // 2
            canvas.alpha_composite(icon, (x, y))

            output_file = OUTPUT_DIR / f"{size}.png"
            canvas.save(output_file, "PNG", optimize=True)

            print(f"Created: {output_file} ({size}x{size})")

    print("All icons generated successfully!")


if __name__ == "__main__":
    generate_icons()
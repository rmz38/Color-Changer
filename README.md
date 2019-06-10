# Color-Changer
This website takes a black and white photo and colors it by parsing through each pixel of the image using javascript.

Vocabulary:
rbg- red blue green format of storing color values in a pixel
hsl- hue saturation light format of storing color values, where hue refers to the color, saturation is just saturation, and light is how dark the pixel is

First, a color or multiple colors are picked to color the photo. Values of a pixel are stored as rgb by default.

Next, the color(s) chosen have their rgb value converted to hsl format.

Then for each pixel, the rbg values are converted to hsl values, where the hue of the pixel is replaced by the chosen color's hue.

# Color-Changer
hosted at https://rmz38.github.io/Color-Changer/
### How to Run:
  
If you want to run it on chrome opening directly from the folder (without a server) you need to do this:

For Windows:

Open the start menu
Type windows+R or open "Run"
Execute the following command:
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security


Otherwise, this works best on microsoft edge(opened directly from the folder wihtout a server) or hosted on a server(such as xampp).



### How to Use:

On the header bar, there are three buttons (monochrome,free,analohous) that choose the color scheme. 

"Free" gives you 5 swatches that let you choose any 5 colors you want in the picture.

"Monochrome" lets you choose one color for the picture.

"Analogous" lets you choose one main color (the middle swatch). Choosing colors on the top and bottom swatch are just meant to compare,
they won't actually be used in the picture. After pressing set, the top and bottom swatches will be analogous colors to the one in the middle.



Then, press the SET button on the header bar to change the color of the picture. For the analogous setting, pressing SET will use the middle 
color and then calculate the 2 colors analogous to it (for example, if you choose blue the other two colors will be green-blue and maybe a darker blue). 
So, anything chosen for the top and bottom swatches will be replaced with the new analogous ones. 

You can also hover your mouse over the swatches to see their current color in rgb form/hex form.

Also, analogous doesnt work with black, gray, or white because they aren't true colors/hues, they're just shades of lighting without saturation. This happens to be why they aren't on a color wheel.



### Explanation of How it Works
This website takes a black and white photo and colors it by parsing through each pixel of the image using javascript.

Vocabulary:
rbg- red blue green format of storing color values in a pixel, where the max value is 255, black is (0,0,0), and white is (255,255,255)
hsl- hue saturation light format of storing color values, where hue refers to the color, saturation is just saturation, and light is how dark the pixel is

*Monochrome and Free Mode*
First, a color or multiple colors are picked to color the photo. Values of a pixel are stored as rgb by default.

Then for each pixel, note that all pixels in a black and white image are white/gray/black. white/gray/black pixels have their red, blue, and green values all equal(ex. white is red-255, blue-255, green-255). So, the chosen color's red value is converted to a fraction out of 255 (ex. 50/255) and multipled against the pixel's red value. This is repeated for the corresponding blue and green values.

Then, this process is repeated for the rest of the pixels in the photo.

*Analogous*
This is mostly the same as Monochrome except two analogous colors have to be calculated first.

To calculate the first color, the chosen color is converted from rgb format to hsl. Then, hue is stored in a degree format from 0 to 360 degrees. This is because it can be visualized as the "color wheel". Then, I chose to subtract around 37 degrees to calculate a color, but there are varying ways to choose an "analogous color" as it can be subjective. This makes a color that has the same lightness and saturation as the original. Then, the second color is found with the same process but by adding 37 degrees instead.

Then, the picture is colored with the same method as Monochrome/Free.

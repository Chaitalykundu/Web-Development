# Definition and Usage

The `<video>` tag is used to embed video content in a document, such as a movie clip or other video streams.

&nbsp;

The `<video>` tag contains one or more `<source>` tags with different video sources. The browser will choose the first source it supports.

The text between the `<video>` and `</video>` tags will only be displayed in browsers that do not support the `<video>` element.

&nbsp;

# Syntax :

```html
<video src="" attributes></video>
```

&nbsp;

# Example :

```html
<video src="../assets/aaaa.mp4" width="555px" controls></video>
```

&nbsp;

# Attribute

| Attribute | Value                 | Description                                                                                           |
| --------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| autoplay  | autoplay              | Specifies that the video will start playing as soon as it is ready                                    |
| controls  | controls              | Specifies that video controls should be displayed (such as a play/pause button etc).                  |
| loop      | loop                  | Specifies that the video will start over again, every time it is finished                             |
| muted     | muted                 | Specifies that the audio output of the video should be muted                                          |
| poster    | URL                   | Specifies an image to be shown while the video is downloading, or until the user hits the play button |
| preload   | auto, metadata , none | Specifies if and how the author thinks the video should be loaded when the page loads                 |
| src       | URL                   | Specifies the URL of the video file                                                                   |
| height    | pixels                | Sets the height of the video player                                                                   |
| width     | pixels                | Sets the width of the video player                                                                    |

&nbsp;

&nbsp;

# Default CSS Settings

None

&nbsp;

# Global attribute:

> The `<video>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute:

> The `<video>` tag supports the Event attributes in HTML.

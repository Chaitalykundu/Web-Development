# Definition and Usage

The `<audio>` tag is used to embed sound content in a document, such as music or other audio streams.

&nbsp;

The `<audio>` tag contains one or more `<source>` tags with different audio sources. The browser will choose the first source it supports.

The text between the `<audio>` and `</audio>` tags will only be displayed in browsers that do not support the `<audio>` element.

There are **_three_** supported audio formats in HTML: **_MP3, WAV, and OGG_**.

&nbsp;

# Syntax

```html
<audio src="" attributes></audio>
```

&nbsp;

# Example

```html
<audio src="../assets/aaaa.mp3" controls></audio>
```

&nbsp;

# Attribute

| Attribute | Value                 | Description                                                                                           |
| --------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| autoplay  | autoplay              | Specifies that the audio will start playing as soon as it is ready                                    |
| controls  | controls              | Specifies that audio controls should be displayed (such as a play/pause button etc).                  |
| loop      | loop                  | Specifies that the audio will start over again, every time it is finished                             |
| muted     | muted                 | Specifies that the audio output should be muted                                                       |
| poster    | URL                   | Specifies an image to be shown while the audio is downloading, or until the user hits the play button |
| preload   | auto, metadata , none | Specifies if and how the author thinks the audio should be loaded when the page loads                 |
| src       | URL                   | Specifies the URL of the audio file                                                                   |

&nbsp;

&nbsp;

# Default CSS Settings

None

&nbsp;

# Global attribute

> The `<audio>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute

> The `<audio>` tag supports the Event attributes in HTML.

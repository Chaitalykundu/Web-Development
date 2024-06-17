# Overview

- Request Methods
- Request URL
- Response status codes

&nbsp;

&nbsp;

&nbsp;

# Request Methods

When we make an HTTP call to a server, we specify a request method that indicates the type of operation we are about to perform. These are also called **HTTP verbs**.

&nbsp;

| Method name | Operation                                                                                |
| ----------- | ---------------------------------------------------------------------------------------- |
| GET         | Retrieve data (Read)                                                                     |
| POST        | Send data (Create)                                                                       |
| PUT/PATCH   | Update data (Update)                                                                     |
|             | \* PUT usually replaces an entire resource, whereas PATCH usually is for partial updates |
| DELETE      | Delete data (Delete)                                                                     |
|             |                                                                                          |

&nbsp;

&nbsp;

# Request URL

In addition to a request method, a request must include a request URL that indicates where to make the API call.

&nbsp;

A request URL has **three** parts:

- **protocol** (such as http:// or https://)
- **host** (location of the server)
- **path** (route on the server).

&nbsp;

| Protocol | Host                        | Path   |
| -------- | --------------------------- | ------ |
| https:// | library-api.postmanlabs.com | /books |

&nbsp;

Paths and complete URLs are also sometimes called **API endpoints**.

&nbsp;

&nbsp;

# Response status codes

he Postman Library API v2 has returned a response status code of **"200 OK"**. Status codes are indicators of whether a request failed or succeeded.

Status codes have conventions. For example, any status code starting with a "2xx" (a "200-level response") represents a successful call.

Get familiar with status code categories:

<table>
    <thead>
        <tr>
            <th>Code range</th>
            <th>Meaning</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">2xx</td>
            <td rowspan="3">Success</td>
            <td>200 - OK </td>
        </tr>
        <tr>
            <td>201 - Created</td>
        </tr>
        <tr>
            <td>204 - No content (silent OK)</td>
        </tr>
        <tr>
            <td>3xx</td>
            <td>Redirection</td>
            <td>301 - Moved (path changed)</td>
        </tr>
        <tr>
            <td rowspan="4">4xx</td>
            <td rowspan="4">Client error</td>
            <td>400 - Bad request</td>
        </tr>
        <tr>
            <td>401 - Unauthorized</td>
        </tr>
        <tr>
            <td>403 - Not Permitted</td>
        </tr>
        <tr>
            <td>404 - Not Found</td>
        </tr>
        <tr>
            <td rowspan="3">5xx</td>
            <td rowspan="3">Server error</td>
            <td>500 - Internal server error</td>
        </tr>
        <tr>
            <td>502 - Bad gateway</td>
        </tr>
        <tr>
            <td>504 - Gateway timeout</td>
        </tr>
    </tbody>
</table>

&nbsp;

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;

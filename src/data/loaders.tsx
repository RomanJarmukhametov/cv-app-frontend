import qs from "qs";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

/**
 * Fetches data from the specified URL.
 *
 * @param {string} url - The URL to fetch the data from.
 
 */
async function fetchData(url: string) {
  const authToken = null; // I will implement getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

/**
 * The type `FetchOptions` defines options for making fetch requests in TypeScript React, including
 * method, body, and optional headers.
 * @property {string} method - The `method` property in the `FetchOptions` type specifies the HTTP
 * method to be used in the fetch request, such as 'GET', 'POST', 'PUT', 'DELETE', etc.
 * @property {string | FormData} body - The `body` property in the `FetchOptions` type can be either a
 * string or a FormData object.
 * @property headers - The `headers` property in the `FetchOptions` type specifies the headers that
 * will be included in the HTTP request. In this case, it is an optional property that contains a
 * single header named "Content-Type" with a string value. This header is typically used to indicate
 * the media type of the
 */
type FetchOptions = {
  method: string;
  body: string | FormData;
  headers?: {
    "Content-Type": string;
  };
};

/**
 * The function `postData` sends a POST request to a specified endpoint with data in either FormData or
 * JSON format and handles the response accordingly.
 * @param {string} endpoint - The `endpoint` parameter in the `postData` function is a string that
 * represents the specific API endpoint or route where you want to send the POST request. It is
 * typically a URL path relative to the base URL defined in the code.
 * @param {FormData | object} data - The `data` parameter in the `postData` function can be either a
 * `FormData` object or a regular JavaScript object. The function checks the type of `data` to
 * determine how to handle it before making a POST request to the specified `endpoint`. If `data` is a
 * `FormData`
 * @returns The `postData` function is returning the response data received from the server after
 * posting the data.
 */
export async function postData(endpoint: string, data: FormData | object) {
  const url = `${baseUrl}${endpoint}`;
  const options: FetchOptions = {
    method: "POST",
    body: data instanceof FormData ? data : JSON.stringify({ data }),
  };

  if (!(data instanceof FormData)) {
    options.headers = {
      "Content-Type": "application/json",
    };
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error; // or return null;
  }
}

/**
 * Fetches global page metadata from the API.
 *
 * Constructs the API URL using the base URL and queries the `/api/global` endpoint
 * for specific fields: title and description. The data is then fetched using the `fetchData` function.
 */
export async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"],
  });

  return await fetchData(url.href);
}

/**
 * Retrieves the data for the home page.
 *
 * Constructs the API URL using the base URL and queries the `/api/home-page` endpoint
 * with specific parameters to populate various fields within blocks: image, link, feature, and process.
 * The data is then fetched using the `fetchData` function.
 */
export async function getHomePageData() {
  // throw new Error("Test error");
  const url = new URL("/api/home-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          link: {
            populate: true,
          },
          avatar: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

/**
 * Retrieves the data for the resume page from the API.
 *
 * Constructs the API URL using the base URL and queries the `/api/resume-page` endpoint
 * with specific parameters to populate various fields within blocks: title and description.
 * The data is then fetched using the `fetchData` function.
 */
export async function getResumePageData() {
  const url = new URL("/api/resume-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          fields: ["title", "sectionId", "description"],
          workExperience: {
            populate: {
              fields: ["company", "position", "period", "description"],
            },
          },
          educationInfo: {
            populate: {
              fields: ["year", "degree", "institution"],
            },
          },
          skillDegree: {
            populate: {
              fields: ["name", "degree"],
            },
          },
          projectCard: {
            populate: {
              fields: ["title", "description", "image", "url", "category"],
              image: {
                populate: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
          contactDetails: {
            populate: {
              fields: ["type", "name"],
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

/**
 * Retrieves the data for the side navigation from the API.
 *
 * Constructs the API URL using the base URL and queries the `/api/side-navigation` endpoint
 * with specific parameters to populate various fields: link, avatar with image fields,
 * and menu items with icon, section ID, and item details.
 * The data is then fetched using the `fetchData` function.
 */
export async function getSideNavigationData() {
  // Throw new error
  // throw new Error("Test error");
  const url = new URL("/api/side-navigation", baseUrl);

  url.search = qs.stringify({
    populate: {
      link: {
        populate: true,
      },
      avatar: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      menuItem: {
        fields: ["icon", "sectionId", "item"],
      },
    },
  });

  return await fetchData(url.href);
}

/**
 * The function `getFeedbackData` fetches feedback data from an API endpoint and populates image fields
 * with URL and alternative text.
 * @returns The `getFeedbackData` function is returning the result of fetching feedback data from the
 * specified URL after populating the image field with the specified fields ("url" and
 * "alternativeText").
 */
export async function getFeedbackData() {
  const url = new URL("/api/feedbacks-data", baseUrl);

  url.search = qs.stringify({
    populate: {
      image: {
        populate: {
          fields: ["url", "alternativeText"],
        },
      },
    },
  });

  return await fetchData(url.href);
}

/**
 * Retrieves the global data (header and footer) from the API.
 *
 * Constructs the API URL using the base URL and queries the `/api/global` endpoint
 * with specific parameters to populate header and footer data, including logo text,
 * call-to-action button, and social links. The data is then fetched using the `fetchData` function.
 */
export async function getGlobalData() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: [
      "header.logoText",
      "header.ctaButton",
      "footer.logoText",
      "footer.socialLink",
    ],
  });

  return await fetchData(url.href);
}

import qs from "qs";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

/**
 * Fetches data from the specified URL.
 *
 * @param {string} url - The URL to fetch the data from.
 * @returns {Promise<Object>} A Promise that resolves to the fetched data.
 * @throws {Error} If an error occurs while fetching the data.
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
 * Fetches global page metadata from the API.
 *
 * Constructs the API URL using the base URL and queries the `/api/global` endpoint
 * for specific fields: title and description. The data is then fetched using the `fetchData` function.
 *
 * @async
 * @function getGlobalPageMetadata
 * @returns {Promise<Object>} A promise that resolves to the fetched metadata.
 * @throws {Error} Throws an error if the fetch operation fails.
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
 *
 * @async
 * @function getHomePageData
 * @returns {Promise<any>} A Promise that resolves to the data for the home page.
 * @throws {Error} If an error occurs while fetching the data.
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
 *
 * @async
 * @function getResumePageData
 * @returns {Promise<any>} A promise that resolves to the data for the resume page.
 * @throws {Error} If an error occurs while fetching the data.
 */
export async function getResumePageData() {
  const url = new URL("/api/resume-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          fields: ["title", "description"],
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
 *
 * @async
 * @function getGlobalData
 * @returns {Promise<any>} A promise that resolves to the global data.
 * @throws {Error} If an error occurs while fetching the data.
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

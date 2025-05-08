import {
    GITHUB_ACCOUNTS,
    GITHUB_USER_ENDPOINT,
    GITHUB_USER_QUERY,
} from "@/constants/github";

const fetchGithubRateLimit = async (token: string | undefined) => {
    const response = await fetch("https://api.github.com/rate_limit", {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
    return response.json();
};

export const fetchGithubData = async (
    username: string,
    token: string | undefined
) => {
    // Periksa batas permintaan
    const rateLimitData = await fetchGithubRateLimit(token);
    
    // Tambahkan pengecekan apakah `core` dan `graphql` ada dalam `rateLimitData.resources`
    if (rateLimitData.resources && rateLimitData.resources.graphql) {
        const remaining = rateLimitData.resources.graphql.remaining;
        
        if (remaining <= 0) {
            console.error("API rate limit for GraphQL exceeded");
            return { status: 429, data: {} }; // Kode status 429 menunjukkan terlalu banyak permintaan
        }
    } else {
        console.error("Error: Unable to read rate limit data");
        return { status: 500, data: {} }; // Kode status 500 menunjukkan kesalahan server
    }

    const response = await fetch(GITHUB_USER_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
            query: GITHUB_USER_QUERY,
            variables: {
                username: username,
            },
        }),
    });

    const status: number = response.status;
    const responseJson = await response.json();

    if (status === 401) {
        console.error("Unauthorized access - check your token:", responseJson);
    }

    if (status > 400) {
        return { status, data: {} };
    }

    return { status, data: responseJson.data.user };
};

export const getGithubUser = async (type: string) => {
    const account = GITHUB_ACCOUNTS.find(
        (account) => account?.type === type && account?.is_active
    );

    if (!account) {
        throw new Error("Invalid user type");
    }

    const { username, token } = account;
    return await fetchGithubData(username, token);
};

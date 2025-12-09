const API_BASE_URL = "http://localhost:8000";

export interface Store {
    id: number;
    name: string;
    prefecture: string;
    city: string;
    address?: string;
    congestion_url?: string;
    opening_hours?: string;
    phone_number?: string;
    remarks?: string;
}

export interface Staff {
    id: number;
    name: string;
    display_name?: string;
    role?: string;
    store_id: number;
    image_url?: string;
    tags?: any[];
}

export async function fetchStores(prefecture?: string, city?: string): Promise<Store[]> {
    const params = new URLSearchParams();
    if (prefecture) params.append("prefecture", prefecture);
    if (city) params.append("city", city);

    const res = await fetch(`${API_BASE_URL}/stores?${params.toString()}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch stores");
    }

    return res.json();
}

export async function fetchStoreStaff(storeId: number): Promise<Staff[]> {
    const res = await fetch(`${API_BASE_URL}/stores/${storeId}/staff`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch staff");
    }

    return res.json();
}

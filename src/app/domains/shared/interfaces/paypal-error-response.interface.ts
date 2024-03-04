
export interface PaypalErrorResponse {
    name:     string;
    details:  Detail[];
    message:  string;
    debug_id: string;
    links:    Link[];
}

export interface Detail {
    issue:       string;
    description: string;
}

export interface Link {
    href:   string;
    rel:    string;
    method: string;
}

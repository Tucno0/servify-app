import { OrderStatus } from "@type/index";

export interface CreateOrderRequest {
	client_id: string;
	service_id: string;
  name: string;
  last_name: string;
  address: string;
  city: string;
  zip_code: string;
  phone: string;
	start_date: string;
	end_date: string;
	price: number;
	status: OrderStatus;
}

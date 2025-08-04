export interface Product {
  barcode: string;
  barcodes: string;
  base_uom: string;
  brand_id: number;
  brand_name: string;
  category_id: number;
  category_name: string;
  company_id: number;
  cost: number;
  created_at: string;
  created_by: number;
  description: string;
  hangable: number;
  have_360_view: true;
  have_3d_model: true;
  have_supplementary_label: true;
  height: number;
  image: string;
  is_tester: number;
  length: number;
  manufacturer_barcode: string;
  mapping_id: string;
  outbound_method: string;
  owner_id: number;
  packing_type: number;
  packing_type_name: string;
  path_3d: string;
  product_configs: string;
  product_faces: {
    ahead: string;
    behind: string;
    left: string;
    right: string;
  };
  product_id: number;
  product_name: string;
  sku: string;
  stackable: number;
  status: number;
  status_name: string;
  thumb_url: string;
  type: number;
  type_name: string;
  uom: string;
  updated_at: string;
  updated_by: number;
  weight: number;
  width: number;
}

export interface ProductRequest {
  page: number;
  size: number;
  category_ids?: string;
  brand_ids?: number;
  status?: string;
  mapping_id?: string;
  sort_by?: string;
  order_by?: string;
  skus?: number;
  config_query?: string;
  sku_or_barcode?: string;
  keywords?: string;
  barcodes?: string;
  product_name?: number;
  from_date?: number;
  to_date?: number;
  is_tester?: string;
  type_ids?: number;
  have_thumbnail?: number;
  have360_view?: number;
  have3D_model?: number;
  have_supplementary_label?: number;
  stackable?: number;
  hangable?: number;
}

export interface ProductResponse {
  count: number;
  page: number;
  records: Product[];
  size: number;
}

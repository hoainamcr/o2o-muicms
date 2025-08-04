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

export interface ProductResponse {
  count: number;
  page: number;
  records: Product[];
  size: number;
}

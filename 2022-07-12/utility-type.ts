// Pick
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProduct(): Promise<Product[]> {
    //
}

// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

// 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
    //
}


// Partial
// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

// 특정 상품 정보를 업데이트하는 함수
type UpdateProduct = Partial<Product>
function updateProductItem(productItem: Partial<Product>) {
    //
}
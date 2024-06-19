import { useSelector } from 'react-redux';
import './_products.scss';
import productSlice from '../../store/slices/productSlice';

const Products = () =>{
    const productData = useSelector(productSlice.getInitialState);

    
    return (
        <div className='product-container'>
            {
                productData.map((product,key)=>{
                   return( <div className='mx-2 p-2  product-card'>
                    <div className='product-image-container'>
                        <img src={require('../../assets/images/shop/'+product.img)} alt=''/>
                    </div>
                    <div className='product-info'>
                       <h5><a href='link'>{product.pName}</a></h5>
                       <p className='product-price'>${product.price}</p>
                       <div className='product-rating'>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                           <i className='fa fa-star'></i>
                       </div>
                    </div>
                 </div>);
            
                })
            }
            </div>
        
    );
}

export default Products;
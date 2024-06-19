/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from 'react-redux';
import './_cat-nav.scss'
import categorySlice from '../../store/slices/categorySlice';

const CatNav = ()=>{
   const categories = useSelector(categorySlice.getInitialState);
    return (
          <div className='cat-nav-container container'>
            <ul>
              {
                 categories.map((category,index)=>{
                       return(
                          <li className='list-items'><a href='link'>{category}</a></li>
                       )
                 })
              }
            </ul>
          </div> 
    );
}

export default CatNav;
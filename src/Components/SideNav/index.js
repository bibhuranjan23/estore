import './side-nav.scss';

const SideNav = () =>{

  return(
    <div className='side-nav'>
         <div className='section-title'>
              <h3>Category</h3>
         </div>
         <div className="accordion">
            <div className='accordion-item individual-category'>
                 <div className='accordion-header'>
                       <button className='accordion-button' data-bs-target="#accordion-heading-one" data-bs-toggle='collapse'>
                           <div className='category-title'>
                                <a href='link'>Men</a>
                           </div>
                       </button>

                 </div>
                 <div className='accordion-collapse collapse show' id='accordion-heading-one'>
                       <div className='accordion-body'>
                            <ul>
                                <li className='sub-items'><a href='link'>Coats</a></li>
                                <li className='sub-items'><a href='link'>Boots</a></li>
                                <li className='sub-items'><a href='link'>Party Wear</a></li>
                                <li className='sub-items'><a href='link'>Shirts</a></li>
                            </ul>
                       </div>
                 </div>
            </div>
         </div>
    </div>
  )

}

export default SideNav;
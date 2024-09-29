import React from 'react';
import { Link } from 'react-router-dom';

export const Heros = () => {
  return (
    <div className=''>
      <div className='d-none d-lg-block'>
        <div className='row g-0 mt-5'>
          <div className='col-sm-6 col-md-6'>
            <div className='col-image-left'></div>
          </div>
          <div className='col-5 col-md-5 container d-flex justify-content-center align-items-center'>
            <div className='ml-2'>
              <h1>What you have been reading?</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tenetur laboriosam
                delectus est eos aperiam. Eveniet accusantium ratione iure amet. Expedita
                necessitatibus esse dolore optio iure, laboriosam ipsam laudantium corporis impedit
                eveniet similique maiores hic nihil enim cumque sit? Ducimus ab eius enim,
                voluptatibus cum neque vero quae explicabo. Distinctio doloribus harum aliquid,
                ducimus sint consequuntur porro. Esse, unde dicta. Architecto, debitis vero fugiat
                consequatur repellat porro cupiditate omnis nisi autem natus qui dolore iste eos
                aperiam asperiores sit. Autem nulla quibusdam natus ipsum molestiae! Laborum, soluta
                ab. Velit dolor dicta aliquid libero accusamus nulla dolore debitis earum laudantium
                cumque!
              </p>
              <Link className='btn main-color btn-lg text-white' to='#'>
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className='row g-0 mt-5'>
          <div className='col-5 col-md-5 container d-flex justify-content-center align-items-center'>
            <div className='ml-2'>
              <h1>Our collection is always changing!</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta quis cumque
                pariatur, ut modi repudiandae reiciendis ipsum nobis sunt?
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6'>
            <div className='col-image-right'></div>
          </div>
        </div>
      </div>
      {/* Mobile Heros */}
      <div className='d-lg-none'>
        <div className='container'>
          <div className='m-2'>
            <div className='col-image-left'></div>
            <div className='mt-2'>
              <h1>What you have been reading?</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tenetur laboriosam
                delectus est eos aperiam. Eveniet accusantium ratione iure amet. Expedita
                necessitatibus esse dolore optio iure, laboriosam ipsam laudantium corporis impedit
                eveniet similique maiores hic nihil enim cumque sit? Ducimus ab eius enim,
                voluptatibus cum neque vero quae explicabo. Distinctio doloribus harum aliquid,
              </p>
              <Link className='btn main-color btn-lg text-white' to='#'>
                Sign up
              </Link>
            </div>
          </div>
          <div className='m-2'>
            <div className='col-image-right'></div>
            <div className='mt-2'>
              <h1>Our collection is always changing!</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta quis cumque
                pariatur, ut modi repudiandae reiciendis ipsum nobis sunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='flex flex-col text-black mt-5 border-t border-gray-100'>
   
          <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10  ">
              <div className="flex flex-col justify-start items-start gap-6">
              <h2 className='font-bold text-2xl text-[#238f77]'>
              Drive Space.
                  </h2> 
                  drivehub2023 <br />
                  All rights reserved &copy;
              </div>

              <div className="footer__links">
                  {footerLinks.map((link) => (
                      <div key={link.title} className="footer__link">
                          <h3 className='font-bold'>
                              {link.title}
                          </h3>

                          {link.links.map((item) => (
                              <Link
                                  key={item.title}
                                  href={item.url}
                              >
                                  {item.title}
                                  
                              </Link>
                          ) )}
                          
                      </div>
                  ))}
                  
              </div>

          </div>
    </footer>
  )
}

export default Footer

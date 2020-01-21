import React from 'react'
import Footer from 'rc-footer'
import 'rc-footer/assets/index.css'
import logo from 'assets/images/profile.png'
import fb from 'assets/svg/facebook.svg'
import ig from 'assets/svg/instagram.svg'
import wa from 'assets/svg/whatsapp.svg'
import twt from 'assets/svg/twitter.svg'
import li from 'assets/svg/linkedin.svg'
import gh from 'assets/svg/github.svg'
import mrt from 'assets/svg/mrtodo.svg'
import mrl from 'assets/svg/mrlgd.svg'
import wp from 'assets/svg/wp.svg'

const fror = `Made with ❤️ by Mr Wii`

const Ftr = () => {
  return (
    <div>
      <Footer
        theme="dark"
        columns={[
          {
            icon: (
              <img
                src={logo}
                alt="Mr Wii"
                style={{
                  width: '180%',
                  verticalAlign: 'middle',
                  marginLeft: '-12px',
                  marginTop: '-2px'
                }}
              />
            ),
            title: 'Mr Wii',
            items: [
              {
                title: 'Home',
                url: 'https://mr-wii.com/',
                openExternal: false,
                LinkComponent: 'a'
              },
              {
                title: 'About Me',
                url: 'https://mr-wii.com/about',
                openExternal: false
              },
              {
                title: 'Contact Me',
                url: 'https://mr-wii.com/contact'
              }
            ]
          },
          {
            title: 'My Social Media',
            items: [
              {
                icon: <img src={fb} alt="fb" />,
                title: 'Facebook',
                url: 'https://www.facebook.com/Waeruu',
                openExternal: true
              },
              {
                icon: <img src={li} alt="linkedIn" />,
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/ouailbni/',
                openExternal: true
              },

              {
                icon: <img src={twt} alt="Twitter" />,
                title: 'Twitter',
                url: 'https://twitter.com/BniWael',
                openExternal: true
              },
              {
                icon: <img src={ig} alt="Instagram" />,
                title: 'Instagram',
                url: 'https://www.instagram.com/wael_bni/',
                openExternal: true,
                description: 'Personal'
              },
              {
                icon: <img src={ig} alt="Instagram" />,
                title: 'Instagram',
                url: 'https://www.instagram.com/wii.mr/',
                openExternal: true,
                description: 'Mr Wii'
              },
              {
                icon: <img src={wa} alt="Whatsapp" />,
                title: 'WhatsApp',
                description: '+212 6 39 03 23 34'
              }
            ]
          },
          {
            title: 'More from me',
            items: [
              {
                icon: <img src={mrt} alt="MrTodo" />,
                title: 'Mr Todo',
                url: 'https://thirsty-dubinsky-de0f0a.netlify.com/',
                openExternal: true
              },
              {
                icon: <img src={gh} alt="GitHub" />,
                title: 'Github',
                url: 'https://github.com/Mr-Wii',
                openExternal: true
              },
              {
                icon: <img src={wp} alt="MrLegend" />,
                title: 'WP Resume',
                url: 'https://ouailbni.000webhostapp.com/',
                openExternal: true
              },
              {
                icon: <img src={mrl} alt="MrLegend" />,
                title: 'Mr Legend',
                description: 'Unreleased, W.I.P'
              }
            ]
          }
        ]}
        bottom={fror}
      />
    </div>
  )
}

export default Ftr

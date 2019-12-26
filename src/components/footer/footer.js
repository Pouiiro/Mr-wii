import React from 'react'
import Footer from 'rc-footer'
import 'rc-footer/assets/index.css' // import 'rc-footer/asssets/index.less';
import logo from '../../assets/logo.svg'
import fb from '../../assets/facebook.svg'
import ig from '../../assets/instagram.svg'
import wa from '../../assets/whatsapp.svg'
import twt from '../../assets/twitter.svg'
import li from '../../assets/linkedin.svg'
import gh from '../../assets/github.svg'
import mrt from '../../assets/mrtodo.svg'
import mrl from '../../assets/mrlgd.svg'
import wp from '../../assets/wp.svg'

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
              },
              {
                title: 'My Services',
                url: 'https://mr-wii.com/services'
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
        bottom="Made with ❤️ by Mr Wii"
      />
    </div>
  )
}

export default Ftr

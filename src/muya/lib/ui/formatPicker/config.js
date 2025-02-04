import strongIcon from '../../assets/pngicon/format_strong/2.png'
import emphasisIcon from '../../assets/pngicon/format_emphasis/2.png'
import underlineIcon from '../../assets/pngicon/format_underline/2.png'
import codeIcon from '../../assets/pngicon/code/2.png'
import imageIcon from '../../assets/pngicon/format_image/2.png'
import linkIcon from '../../assets/pngicon/format_link/2.png'
import strikeIcon from '../../assets/pngicon/format_strike/2.png'
import mathIcon from '../../assets/pngicon/format_math/2.png'
import clearIcon from '../../assets/pngicon/format_clear/2.png'

const icons = [
  {
    type: 'strong',
    icon: strongIcon,
    title: 'Bold'
    // above chang
  }, {
    type: 'em',
    icon: emphasisIcon,
    title: 'Italic'
  }, {
    type: 'u',
    icon: underlineIcon,
    title: 'Underline'
  }, {
    type: 'del',
    icon: strikeIcon,
    title: 'Strike'
  }, {
    type: 'inline_code',
    icon: codeIcon,
    title: 'Code'
  }, {
    type: 'inline_math',
    icon: mathIcon,
    title: 'Math'
  }, {
    type: 'link',
    icon: linkIcon,
    title: 'Link'
  }, {
    type: 'image',
    icon: imageIcon,
    title: 'Image'
  }, {
    type: 'clear',
    icon: clearIcon,
    title: 'Clear'
  }
]

export default icons

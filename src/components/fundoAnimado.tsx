export default function fundoAnimado (){
    return (
  <div class="wallpaper-container">
    <svg class="waves" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path class="wave wave1" d="M0,160 C480,240 960,80 1440,160 L1440,320 L0,320 Z" />
      <path class="wave wave2" d="M0,180 C480,260 960,100 1440,180 L1440,320 L0,320 Z" />
    </svg>

    <div class="content">
      <slot></slot>
    </div>
  </div>
 )
}
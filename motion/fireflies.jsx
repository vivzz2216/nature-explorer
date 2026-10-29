import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player} from '@remotion/player';
import {useCurrentFrame, useVideoConfig} from 'remotion';

// A loopable, frame-driven constellation. The smaller ellipse is the light
// falling on the meadow beneath each nearby firefly.
const motes = [
  [115,890,0,1.0],[245,790,1.8,.8],[360,955,4.1,.75],[480,855,2.6,1.05],
  [610,935,5.1,.65],[710,785,1.2,.75],[825,875,3.8,1],[940,975,2.3,.7],
  [1040,795,4.5,.85],[1140,910,.7,1.1],[1270,825,3.2,.75],[1390,955,5.8,.8],
  [1490,870,2,1],[1600,785,4.8,.7],[1725,940,1.4,.85],[1840,845,5.5,.65]
];
function FireflyScene(){
  const frame=useCurrentFrame();
  const {width,height}=useVideoConfig();
  const t=frame/360*Math.PI*2;
  return <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" aria-hidden="true">
    <defs><radialGradient id="fly-glow"><stop stopColor="#fff5bb" stopOpacity=".75"/><stop offset=".22" stopColor="#ffe889" stopOpacity=".28"/><stop offset="1" stopColor="#f5db73" stopOpacity="0"/></radialGradient><radialGradient id="fly-pool"><stop stopColor="#d9e4a3" stopOpacity=".22"/><stop offset="1" stopColor="#d4e197" stopOpacity="0"/></radialGradient></defs>
    {motes.map(([x,y,phase,size],i)=>{const px=x/1920*width,py=y/1080*height;const dx=Math.sin(t+phase)*Math.max(8,width/1920*20),dy=Math.sin(2*t+phase)*12;const pulse=.18+.68*Math.pow((Math.sin(2*t+phase)+1)/2,2);return <g key={i} opacity={pulse}>
      <ellipse cx={px+dx} cy={Math.min(py+dy+40,height-10)} rx={60*size} ry={16*size} fill="url(#fly-pool)"/>
      <circle cx={px+dx} cy={py+dy} r={30*size} fill="url(#fly-glow)"/>
      <circle cx={px+dx} cy={py+dy} r={2.7*size} fill="#fff7c7"/>
    </g>})}
  </svg>;
}
function FireflyPlayer(){
  const player=useRef(null);
  const [size,setSize]=useState({width:1920,height:1080});
  useEffect(()=>{const world=document.querySelector('.world');const update=()=>setSize({width:world.clientWidth,height:world.clientHeight});update();const observer=new ResizeObserver(update);observer.observe(world);return ()=>observer.disconnect();},[]);
  useEffect(()=>{
    const world=document.querySelector('.world');
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible=true;
    const sync=()=>{if (!player.current) return; if (visible && world.classList.contains('is-night') && !reduced.matches && !document.hidden) player.current.play(); else player.current.pause();};
    const visibility=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.01});
    const theme=new MutationObserver(sync); visibility.observe(world);theme.observe(world,{attributes:true,attributeFilter:['class']});
    document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);sync();
    return ()=>{visibility.disconnect();theme.disconnect();document.removeEventListener('visibilitychange',sync);reduced.removeEventListener('change',sync);};
  },[]);
  return <Player ref={player} component={FireflyScene} durationInFrames={360} compositionWidth={size.width} compositionHeight={size.height} fps={30} loop controls={false} style={{width:'100%',height:'100%',pointerEvents:'none'}}/>;
}
const mount=document.getElementById('firefly-player');
if(mount){createRoot(mount).render(<FireflyPlayer/>);mount.parentElement.classList.add('remotion-ready');}

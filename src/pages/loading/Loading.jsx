import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './loading.css'

export default function Loading() {

  return (
    <div className="loading">
    <DotLottieReact
      src="assets\SVG\loading.lottie"
      loop = {true}
      autoplay = {true}
    />
    </div>
  );
};
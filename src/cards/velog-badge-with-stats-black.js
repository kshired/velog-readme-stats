const createBadgeDark = (name, likes, views) => {
    const name_size = (name.length-1) * 9;
    const likes_size = (likes.toString().length + 2)* 9;
    const views_size = (views.toString().length + 2) * 9;
    const total_size = 33+name_size+likes_size+views_size
    return `
            <svg width="${total_size}" height="25" viewBox="0 0 ${total_size} 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <style>
                    .icon{ fill: white; font-weight: 500; font-size: 14px;}
                    .stats{ fill: #20C997; font-weight: 500; font-size: 14px;}
                </style>
                <g>
                    <rect x="2" width="${total_size}" height="25" fill="#24292e"/>
                    <text x="30" y="17" class="stats">${name}</text>
                    <text x="${30+name_size}" y="17" class="icon">♡</text>
                    <text x="${48+name_size}" y="17" class="stats">${likes}</text>
                    <text x="${48+name_size+likes_size}" y="17" class="stats">${views}</text>
                </g>
                <path d="M3.125 0H21.875C23.6009 0 25 1.39911 25 3.125V21.875C25 23.6009 23.6009 25 21.875 25H3.125C1.39911 25 0 23.6009 0 21.875V3.125C0 1.39911 1.39911 0 3.125 0Z" fill="#24292e"/>
                <path d="M18.6199 8.526V7.54163C17.9949 7.3385 17.2605 7.11975 16.4167 6.88538C15.573 6.63538 15.0027 6.51038 14.7058 6.51038C14.0496 6.51038 13.6589 6.82288 13.5339 7.44788L12.0105 16.0963C11.5261 15.4557 11.1277 14.9166 10.8152 14.4791C10.3308 13.7916 9.8855 13.0026 9.47925 12.1119C9.05737 11.2213 8.84644 10.4244 8.84644 9.72131C8.84644 9.29944 8.96362 8.9635 9.198 8.7135C9.41675 8.44788 9.83081 8.11194 10.4402 7.70569C9.81519 6.90881 9.03393 6.51038 8.09643 6.51038C7.59644 6.51038 7.18237 6.65881 6.85425 6.95569C6.5105 7.25256 6.33862 7.69006 6.33862 8.26819C6.33862 9.23694 6.74487 10.4479 7.55737 11.901C8.35425 13.3385 9.89331 15.5026 12.1746 18.3932L14.4949 18.5573L16.2761 8.526H18.6199Z" fill="white"/>
                <svg x="${30+name_size+likes_size}" y="4.5" width="14px" height="14px" viewBox="0 -0.778 14 14" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="M7 3.5a2.696 2.696 0 0 0 -0.759 0.122 1.347 1.347 0 0 1 0.176 0.656 1.361 1.361 0 0 1 -1.361 1.361 1.347 1.347 0 0 1 -0.656 -0.176A2.715 2.715 0 1 0 7 3.5zm6.915 2.367C12.597 3.296 9.988 1.556 7 1.556S1.402 3.297 0.085 5.868a0.786 0.786 0 0 0 0 0.709C1.403 9.149 4.012 10.889 7 10.889s5.598 -1.741 6.915 -4.312a0.786 0.786 0 0 0 0 -0.709zM7 9.722c-2.398 0 -4.596 -1.337 -5.783 -3.5C2.404 4.059 4.602 2.722 7 2.722s4.596 1.337 5.783 3.5C11.596 8.385 9.398 9.722 7 9.722z"/>
                </svg>
            </svg>
      `;
  };
  
  module.exports = createBadgeDark;
  

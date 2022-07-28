import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const sidebar = (props) => {
    return (
        <>
            <aside id="left-sidebar" className="w-[17rem] cursor-pointer mb-16 custom-scroll-auto font-medium">
                <div className="w-full grid-container mt-5">
                    <Link to="/dashboard/home">
                        <div className="grid-item">
                            <svg className={props.name === 'home' ? 'current' : ''} fill="none" stroke="currentColor" viewBox="-4 -2.5 30 30" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M24 12.4926C23.8617 12.9047 23.675 13.2875 23.3477 13.5873C22.9263 13.9734 22.4329 14.178 21.8605 14.186C21.7434 14.1879 21.6263 14.1865 21.4678 14.1865C21.4678 14.2859 21.4678 14.3755 21.4678 14.4651C21.4678 16.7661 21.4715 19.0671 21.4659 21.3681C21.4626 22.6277 20.6649 23.6432 19.4619 23.927C19.2512 23.9769 19.0287 23.9948 18.8114 23.9963C17.5909 24.0029 16.37 24 15.1495 23.9991C14.6185 23.9986 14.3363 23.72 14.3358 23.1901C14.3344 21.3898 14.3156 19.5894 14.3443 17.79C14.3565 17.0051 13.8218 16.413 12.9837 16.4446C12.3271 16.4696 11.6691 16.4479 11.0121 16.4502C10.1937 16.4526 9.71776 16.9301 9.71729 17.7518C9.71588 19.5442 9.71729 21.3365 9.71682 23.1288C9.71682 23.7407 9.4572 23.9996 8.84673 23.9996C7.65729 23.9996 6.46785 24.001 5.2784 23.9991C3.70189 23.9967 2.5877 22.8875 2.58535 21.312C2.58205 19.0421 2.58441 16.7727 2.58441 14.5028C2.58441 14.4099 2.58441 14.317 2.58441 14.2114C2.31679 14.1888 2.05859 14.1898 1.81026 14.1412C0.973087 13.9781 0.399295 13.4822 0.12792 12.6784C-0.141103 11.8822 0.0235089 11.1515 0.566259 10.5089C0.636807 10.4255 0.716291 10.3491 0.793894 10.2718C3.85239 7.21132 6.91371 4.15227 9.97032 1.08851C10.4124 0.645375 10.8414 0.193282 11.4627 0C11.8384 0 12.2138 0 12.5895 0C13.1831 0.190925 13.6064 0.611433 14.033 1.03948C17.0416 4.05705 20.0535 7.07084 23.0716 10.0785C23.4761 10.4816 23.8391 10.8988 23.9995 11.4593C24 11.8039 24 12.1485 24 12.4926ZM8.30727 22.5858C8.30727 22.467 8.30727 22.3746 8.30727 22.2822C8.30915 20.6935 8.2941 19.1043 8.31762 17.5156C8.33643 16.264 9.33868 15.1651 10.585 15.0812C11.5421 15.0166 12.5072 15.0675 13.469 15.0704C13.5462 15.0704 13.6242 15.0888 13.7 15.1062C14.9294 15.3858 15.735 16.3941 15.7412 17.683C15.7482 19.2245 15.743 20.7666 15.743 22.3081C15.743 22.3986 15.743 22.4887 15.743 22.5905C16.7575 22.5905 17.7353 22.5905 18.7131 22.5905C19.5964 22.5905 20.0587 22.129 20.0587 21.2469C20.0592 18.6876 20.0582 16.1282 20.0596 13.5689C20.0601 13.0692 20.3475 12.7826 20.8456 12.7788C21.1818 12.776 21.5186 12.7835 21.8549 12.776C22.2208 12.768 22.51 12.5337 22.6064 12.1801C22.7146 11.7836 22.5114 11.5121 22.2499 11.2505C19.0771 8.08156 15.9077 4.90985 12.7368 1.7386C12.225 1.22711 11.8267 1.22805 11.3131 1.74143C8.48599 4.56901 5.65842 7.39706 2.83085 10.2251C2.44331 10.6126 2.05435 10.9978 1.66916 11.3876C1.41331 11.6469 1.33617 11.9552 1.48197 12.2918C1.6226 12.6166 1.88692 12.7774 2.24389 12.7774C2.52562 12.7779 2.80734 12.7774 3.08906 12.7779C3.74422 12.7783 3.99208 13.0277 3.99208 13.6882C3.99208 16.2475 3.99067 18.8069 3.99302 21.3662C3.99349 22.0229 4.43653 22.5608 5.05735 22.5773C6.12827 22.6065 7.2006 22.5858 8.30727 22.5858Z"></path>
                            </svg>
                        </div>
                        <p className="block text-center">Home</p>
                    </Link>

                    <Link to="/dashboard/invoice">
                        <div className="grid-item">
                            <svg className={props.name === 'invoice' ? 'current' : ''} fill="none" stroke="currentColor" viewBox="-.5 -.5 24 27" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.74768 23.9989C9.47321 23.8138 9.17974 23.6519 8.9292 23.4394C8.35774 22.9545 7.80668 22.445 7.24719 21.946C7.20144 21.9052 7.15218 21.8693 7.09376 21.8221C6.5969 22.262 6.10426 22.6948 5.61584 23.1311C5.31252 23.4021 4.97189 23.5379 4.5623 23.4471C4.07247 23.3387 3.73115 22.9425 3.69525 22.4414C3.68892 22.3556 3.6861 22.2697 3.6861 22.1839C3.6854 15.396 3.6861 8.60739 3.68329 1.81952C3.68329 1.47256 3.73255 1.15093 3.97817 0.886316C4.40043 0.429568 5.05001 0.397195 5.55602 0.825792C6.01488 1.21427 6.45967 1.61965 6.91078 2.01798C6.96849 2.06936 7.02831 2.11862 7.10221 2.18196C7.43298 1.88708 7.75883 1.59783 8.08397 1.30788C8.43374 0.995401 8.78141 0.681519 9.13188 0.370452C9.68575 -0.121485 10.2523 -0.1243 10.8055 0.366933C11.4191 0.910948 12.0293 1.45919 12.6409 2.00531C12.7035 2.06161 12.7704 2.11369 12.8478 2.17844C13.42 1.6675 13.9844 1.1636 14.5481 0.660405C14.6586 0.561877 14.7691 0.461942 14.8803 0.364118C15.4349 -0.122892 15.9986 -0.120781 16.5539 0.37397C17.1668 0.919393 17.777 1.46693 18.3886 2.01305C18.4463 2.06443 18.5054 2.1151 18.5821 2.18126C18.7602 2.02643 18.9354 1.87512 19.1085 1.72169C19.4245 1.4423 19.7426 1.16571 20.0551 0.882094C20.4373 0.535134 20.8701 0.411974 21.3472 0.632255C21.8138 0.847609 22.0003 1.24383 21.9996 1.75266C21.9961 5.89295 21.9975 10.0332 21.9975 14.1728C21.9975 16.8521 21.9947 19.5313 22.0003 22.2106C22.001 22.654 21.8835 23.0277 21.5049 23.2853C21.0918 23.5661 20.5815 23.5506 20.179 23.2156C19.6927 22.8109 19.2268 22.3823 18.7517 21.9643C18.6997 21.9185 18.6455 21.8749 18.5793 21.82C18.1254 22.2247 17.6778 22.6244 17.2302 23.0242C17.038 23.1959 16.8572 23.3824 16.651 23.5365C16.4237 23.7068 16.1745 23.8469 15.9352 24.0003C15.7945 24.0003 15.6537 24.0003 15.5137 24.0003C15.2477 23.8307 14.9697 23.6766 14.7184 23.4879C14.482 23.3106 14.2736 23.0966 14.0527 22.8989C13.6529 22.5421 13.2518 22.1853 12.8415 21.82C12.2566 22.3422 11.6957 22.8602 11.1151 23.3549C10.8357 23.5928 10.5176 23.7863 10.2178 24.0003C10.0602 23.9989 9.90392 23.9989 9.74768 23.9989ZM4.81706 22.3408C5.35545 21.8643 5.84105 21.4238 6.33862 20.9973C6.8207 20.5835 7.38372 20.5877 7.86932 20.998C8.1079 21.1993 8.33592 21.4132 8.56887 21.6215C9.03336 22.0361 9.49714 22.4499 9.97008 22.8714C10.0595 22.7933 10.1355 22.7279 10.2108 22.6603C10.8111 22.1247 11.41 21.5878 12.0103 21.0522C12.5515 20.5701 13.1272 20.5687 13.667 21.0494C14.2736 21.5899 14.8782 22.1318 15.4841 22.673C15.558 22.7391 15.6354 22.8025 15.7136 22.87C16.4032 22.2528 17.0761 21.6462 17.7545 21.0459C18.2915 20.5701 18.8538 20.568 19.3936 21.0374C19.8355 21.4217 20.2712 21.813 20.711 22.2007C20.7533 22.238 20.8025 22.2669 20.8581 22.307C20.8581 15.4255 20.8581 8.56798 20.8581 1.67384C20.761 1.75477 20.6955 1.80755 20.6329 1.86315C20.2121 2.23615 19.8011 2.62111 19.3661 2.97722C19.1972 3.11516 18.984 3.22706 18.7735 3.27984C18.3801 3.37767 18.0437 3.21932 17.7482 2.95259C17.0761 2.34594 16.3997 1.74492 15.7128 1.13053C15.6192 1.21216 15.5306 1.28747 15.444 1.36418C14.8437 1.89975 14.2462 2.43884 13.6438 2.9723C13.1356 3.42271 12.5487 3.4213 12.0392 2.97581C11.8745 2.83154 11.7133 2.68445 11.55 2.53877C11.0264 2.07147 10.5021 1.60416 9.97359 1.13264C9.90814 1.18823 9.85466 1.23187 9.80328 1.27832C9.16989 1.84345 8.53931 2.41561 7.89958 2.97722C7.39357 3.42201 6.82352 3.4206 6.31328 2.98637C6.08174 2.78861 5.85724 2.58241 5.62922 2.38042C5.36812 2.14959 5.10631 1.92016 4.81777 1.6661C4.81706 8.56728 4.81706 15.4262 4.81706 22.3408Z" fill="black" />
                                <path d="M12.8506 14.8104C14.5769 14.8104 16.3033 14.8111 18.0296 14.8097C18.276 14.8097 18.4955 14.8548 18.6377 15.0814C18.8284 15.3854 18.6785 15.7943 18.3337 15.8928C18.2302 15.9224 18.1183 15.9329 18.0106 15.9329C14.5657 15.935 11.1207 15.935 7.67577 15.9329C7.56809 15.9329 7.45689 15.9217 7.35274 15.8942C7.11697 15.8316 6.96144 15.6169 6.96003 15.3741C6.95862 15.144 7.10501 14.9223 7.32599 14.8562C7.44282 14.821 7.57161 14.8125 7.69477 14.8125C9.41338 14.8097 11.132 14.8104 12.8506 14.8104Z" fill="black" />
                                <path d="M12.8647 11.4372C14.591 11.4372 16.3174 11.4365 18.0437 11.438C18.4456 11.438 18.6778 11.6153 18.7144 11.9419C18.7433 12.2022 18.5941 12.445 18.3428 12.5189C18.2401 12.5492 18.1282 12.5605 18.0205 12.5605C14.5678 12.5626 11.1151 12.5619 7.66242 12.5626C7.41821 12.5626 7.19582 12.5232 7.05084 12.2973C6.8566 11.9946 6.99665 11.5843 7.34009 11.4802C7.44988 11.4471 7.57023 11.4394 7.68635 11.4394C9.41199 11.4365 11.1383 11.4372 12.8647 11.4372Z" fill="currentColor" />
                                <path d="M10.3198 9.1894C9.41479 9.1894 8.50904 9.19222 7.60399 9.18799C7.15147 9.18588 6.89037 8.88819 6.98115 8.49056C7.03957 8.23439 7.25914 8.07182 7.57725 8.06548C7.92069 8.05915 8.26413 8.06408 8.60757 8.06408C10.0672 8.06408 11.5261 8.06337 12.9857 8.06478C13.3207 8.06478 13.5459 8.19639 13.6311 8.43144C13.769 8.81288 13.4981 9.17884 13.0589 9.18729C12.5986 9.19573 12.1377 9.1894 11.6774 9.1894C11.2256 9.1894 10.7724 9.1894 10.3198 9.1894Z" fill="currentColor" />

                            </svg>
                        </div>
                        <p className="block text-center">Invoice</p>
                    </Link>

                    <Link to="#">
                        <div className="grid-item">
                            <svg className={props.name === 'transaction' ? 'current' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 24 24">
                                <path strokeWidth={.1} d="M20.2929 4.35089C19.9332 3.99848 19.6437 3.71801 19.3586 3.4339C18.8514 2.92943 18.3433 2.42495 17.8416 1.91592C17.3635 1.43148 17.3398 0.783122 17.776 0.334192C18.2213 -0.124755 18.8888 -0.112006 19.3823 0.378812C20.7983 1.78934 22.2098 3.20443 23.623 4.61769C23.9782 4.97283 24.1065 5.38989 23.9062 5.86068C23.7077 6.32873 23.3262 6.53362 22.8217 6.53362C17.0648 6.5327 11.307 6.53362 5.55016 6.53179C4.85901 6.53179 4.36637 6.07103 4.36728 5.44088C4.36819 4.8071 4.85628 4.35271 5.55107 4.35271C10.309 4.35089 15.0669 4.3518 19.8249 4.3518C19.9451 4.35089 20.0653 4.35089 20.2929 4.35089Z" fill="currentColor" />

                                <path strokeWidth={.2} d="M3.74807 10.8945C3.87192 11.0284 3.94385 11.1112 4.02034 11.1877C4.73426 11.9026 5.45273 12.6137 6.1621 13.3331C6.63743 13.8148 6.65565 14.4705 6.21855 14.9158C5.77053 15.3711 5.1067 15.3538 4.61224 14.8611C3.20444 13.4588 1.8021 12.051 0.395211 10.6477C0.0309677 10.2844 -0.113819 9.86462 0.0956209 9.38018C0.30324 8.89847 0.701176 8.71088 1.21658 8.71088C6.96161 8.71453 12.7066 8.71271 18.4526 8.71362C19.1419 8.71362 19.6346 9.1762 19.6318 9.80726C19.6291 10.4383 19.1383 10.8927 18.4435 10.8927C13.6865 10.8945 8.92853 10.8936 4.17151 10.8936C4.05313 10.8945 3.93384 10.8945 3.74807 10.8945Z" fill="currentColor" />

                            </svg>
                        </div>
                        <p className="block text-center">Transaction</p>
                    </Link>

                    <Link to="/dashboard/store">
                        <div className="grid-item">
                            <svg className={props.name === 'store' ? 'current' : ''} viewBox="-2.5 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.43 32C18.43 32 12.43 32 6.43 32C6.21 31.95 5.99 31.9 5.77 31.85C3.69 31.3 2.29 29.48 2.29 27.26C2.28 23.42 2.29 19.58 2.29 15.73C2.29 15.5 2.23 15.38 2.02 15.27C0.879997 14.62 0.179997 13.65 0.0499967 12.33C-0.0300033 11.5 -3.33879e-06 10.65 0.00999666 9.81C0.00999666 9.56 0.0699967 9.29 0.169997 9.06C1.38 6.3 2.6 3.56 3.82 0.81C3.98 0.43 4.22 0.14 4.62 0C11.83 0 19.04 0 26.25 0C26.65 0.14 26.88 0.43 27.05 0.81C28.26 3.56 29.49 6.3 30.7 9.05C30.79 9.25 30.85 9.47 30.85 9.68C30.87 10.42 30.88 11.16 30.85 11.9C30.8 13.4 30.12 14.54 28.81 15.29C28.62 15.4 28.57 15.5 28.57 15.7C28.58 17.42 28.57 19.14 28.57 20.85C28.57 23.04 28.59 25.22 28.56 27.41C28.53 29.54 27.12 31.31 25.09 31.84C24.88 31.9 24.65 31.95 24.43 32ZM9.28 29.95C9.28 29.84 9.28 29.71 9.28 29.59C9.28 26.8 9.28 24.01 9.28 21.22C9.28 20.45 9.67 20.07 10.43 20.07C13.76 20.07 17.1 20.07 20.43 20.07C20.54 20.07 20.66 20.07 20.77 20.09C21.29 20.19 21.58 20.6 21.58 21.22C21.58 24.01 21.58 26.8 21.58 29.59C21.58 29.72 21.58 29.85 21.58 29.99C22.46 29.99 23.3 30.01 24.13 29.98C24.4 29.97 24.69 29.89 24.94 29.78C26.04 29.28 26.57 28.41 26.57 27.2C26.57 23.48 26.57 19.76 26.57 16.04C26.57 15.95 26.56 15.86 26.56 15.74C25.59 15.61 24.76 15.2 24.09 14.48C23.28 15.3 22.34 15.75 21.2 15.75C20.06 15.75 19.11 15.3 18.31 14.48C17.51 15.31 16.56 15.75 15.43 15.75C14.29 15.75 13.34 15.29 12.54 14.48C11.73 15.3 10.79 15.75 9.65 15.75C8.51 15.75 7.56 15.29 6.76 14.48C6.16 15.11 5.46 15.53 4.62 15.67C4.32 15.72 4.26 15.83 4.27 16.11C4.28 18.45 4.28 20.8 4.28 23.14C4.28 24.58 4.26 26.02 4.29 27.45C4.32 28.71 5.23 29.78 6.48 29.92C7.39 30.04 8.31 29.95 9.28 29.95ZM2.58 8.58C11.16 8.58 19.72 8.58 28.3 8.58C28.25 8.45 28.21 8.36 28.17 8.26C27.28 6.27 26.39 4.27 25.51 2.27C25.42 2.05 25.31 1.99 25.07 1.99C18.65 2 12.22 2 5.8 1.99C5.57 1.99 5.46 2.05 5.36 2.27C4.48 4.28 3.58 6.28 2.69 8.29C2.65 8.38 2.62 8.47 2.58 8.58ZM11.3 22.08C11.3 24.73 11.3 27.36 11.3 29.99C14.07 29.99 16.81 29.99 19.56 29.99C19.56 27.35 19.56 24.72 19.56 22.08C16.8 22.08 14.07 22.08 11.3 22.08ZM25.1 10.6C25.1 11.12 25.07 11.6 25.11 12.08C25.18 12.96 25.89 13.66 26.74 13.75C27.66 13.85 28.54 13.32 28.75 12.43C28.89 11.84 28.85 11.21 28.9 10.61C27.59 10.6 26.36 10.6 25.1 10.6ZM5.81 10.63C4.51 10.63 3.27 10.63 2.04 10.63C2.04 11.17 1.99 11.69 2.05 12.2C2.16 13.06 2.91 13.71 3.75 13.75C4.68 13.8 5.5 13.25 5.68 12.37C5.81 11.81 5.77 11.22 5.81 10.63ZM19.32 10.63C19.32 11.11 19.3 11.56 19.33 12.01C19.39 12.93 20.12 13.67 21 13.75C21.96 13.84 22.85 13.25 23.02 12.32C23.12 11.78 23.04 11.21 23.04 10.63C21.81 10.63 20.58 10.63 19.32 10.63ZM7.79 10.63C7.79 11.11 7.77 11.56 7.79 12.01C7.84 12.95 8.61 13.71 9.52 13.76C10.51 13.81 11.36 13.19 11.5 12.23C11.57 11.71 11.51 11.18 11.51 10.63C10.28 10.63 9.05 10.63 7.79 10.63ZM13.55 10.62C13.55 11.08 13.54 11.51 13.55 11.93C13.57 12.85 14.28 13.63 15.18 13.74C16.13 13.85 17.04 13.28 17.23 12.35C17.34 11.79 17.3 11.2 17.34 10.61C16.04 10.62 14.82 10.62 13.55 10.62Z" fill="black" />
                            </svg>


                        </div>
                        <p className="block text-center">Store</p>
                    </Link>

                    <Link to="/dashboard/connects">
                        <div className="grid-item">
                            <svg className={props.name === 'connects' ? 'current' : ''} fill="none" stroke="currentColor" viewBox="-2 -3 40 40" xmlns="http://www.w3.org/2000/svg">

                                <g clipPath="url(#clip0_1013_2423)">
                                    <path d="M0 14.9355C0.120229 14.6166 0.214575 14.2834 0.36653 13.9803C0.591959 13.532 0.964333 13.2156 1.39682 12.9643C7.32309 9.51687 13.2477 6.06698 19.1723 2.61876C19.6574 2.33656 20.1433 2.05436 20.6284 1.77048C22.0811 0.920534 23.6082 1.32547 24.4498 2.79075C25.9009 5.31639 27.3495 7.84369 28.7897 10.3752C28.9125 10.5914 29.0427 10.6749 29.2965 10.6782C30.8812 10.7 31.9958 11.8346 31.9975 13.4201C32.0008 18.2526 32.0008 23.0843 31.9975 27.9168C31.9967 29.4673 30.9012 30.5978 29.3533 30.6671C29.2807 30.6704 29.2072 30.6696 29.1346 30.6696C21.7096 30.6696 14.2838 30.6704 6.85887 30.6696C5.48543 30.6696 4.43927 29.9307 4.10864 28.7108C4.03601 28.4437 4.00762 28.1573 4.00595 27.8793C3.99593 26.3589 4.00595 24.8385 3.99509 23.3181C3.99342 23.1319 3.94333 22.9248 3.85149 22.7629C2.76442 20.8442 1.65815 18.9364 0.57359 17.0153C0.346492 16.6137 0.190362 16.172 0.00166984 15.7487C0 15.4774 0 15.206 0 14.9355ZM17.9925 29.3253C21.6996 29.3253 25.4066 29.3086 29.1137 29.3362C30.1223 29.3437 30.6825 28.6808 30.6792 27.7766C30.6616 23.0284 30.6716 18.2794 30.6708 13.5312C30.6708 12.5184 30.1448 11.9974 29.1279 11.9974C21.7138 11.9974 14.2997 11.9974 6.88475 11.9974C5.84528 11.9974 5.3293 12.5117 5.3293 13.5495C5.32846 18.2877 5.33932 23.0259 5.32011 27.7632C5.31677 28.6632 5.85697 29.3445 6.90312 29.3362C10.5985 29.307 14.2955 29.3253 17.9925 29.3253ZM27.3929 10.6557C27.3436 10.5505 27.3153 10.4754 27.276 10.4069C25.9376 8.06828 24.6009 5.72884 23.2575 3.39357C22.8342 2.65884 22.0912 2.4643 21.3631 2.88844C17.0015 5.42576 12.6415 7.96475 8.28158 10.5046C8.22564 10.5371 8.17638 10.5822 8.07702 10.6565C14.5393 10.6557 20.9398 10.6557 27.3929 10.6557ZM3.92747 20.2072C3.94834 20.203 3.96838 20.1997 3.98925 20.1955C3.98925 17.8118 3.98925 15.4281 3.98925 12.9835C3.2278 13.4452 2.47053 13.8543 1.77003 14.346C1.2958 14.6792 1.18809 15.3813 1.47864 15.904C2.281 17.3459 3.10924 18.7736 3.92747 20.2072Z" fill="black" />
                                    <path d="M11.987 26.6695C10.7797 26.6695 9.57156 26.6386 8.36509 26.6778C6.99749 26.7221 6.4598 25.9122 6.72447 24.5863C6.86975 23.8566 7.31643 23.3314 7.97686 23.0033C10.6661 21.6699 13.3638 21.6616 16.0422 23.0167C17.1526 23.5786 17.4524 24.5571 17.2979 25.6342C17.2086 26.2578 16.6258 26.6653 15.8902 26.6678C14.5886 26.6728 13.2878 26.6695 11.987 26.6695ZM15.9771 25.3369C16.0255 24.7333 15.8468 24.4026 15.3726 24.1697C13.1191 23.0609 10.8657 23.0668 8.61474 24.1755C8.11963 24.4193 7.94012 24.7909 8.0328 25.3369C10.6762 25.3369 13.3178 25.3369 15.9771 25.3369Z" fill="black" />
                                    <path d="M11.9869 21.3234C10.5208 21.3176 9.32521 20.1187 9.33022 18.6584C9.33439 17.1864 10.5517 15.9866 12.0278 15.9983C13.4856 16.01 14.6879 17.2323 14.6678 18.6834C14.6486 20.1562 13.4564 21.3301 11.9869 21.3234ZM13.3245 18.6776C13.3303 17.937 12.75 17.34 12.0128 17.3284C11.2839 17.3175 10.6794 17.9136 10.6736 18.65C10.6678 19.3898 11.2522 19.9892 11.9853 19.9968C12.72 20.0034 13.3186 19.414 13.3245 18.6776Z" fill="black" />
                                    <path d="M23.3318 19.9976C21.5818 19.9976 19.8318 20.0001 18.0818 19.9959C17.5667 19.9951 17.2444 19.6252 17.358 19.1785C17.4323 18.8855 17.6226 18.7143 17.9249 18.6784C17.9967 18.6701 18.0701 18.6701 18.1436 18.6701C21.6019 18.6701 25.0601 18.6692 28.5184 18.6701C28.9868 18.6701 29.2556 18.8554 29.3132 19.2061C29.3875 19.6586 29.0836 19.9951 28.5818 19.9959C26.9153 19.9993 25.2488 19.9976 23.5823 19.9976C23.4988 19.9976 23.4153 19.9976 23.3318 19.9976Z" />
                                    <path d="M24.6736 22.6693C25.9744 22.6693 27.2752 22.6668 28.576 22.671C29.0186 22.6727 29.2882 22.8939 29.32 23.2621C29.3559 23.6854 29.0753 23.9885 28.622 23.996C28.0809 24.0044 27.5399 23.9985 26.9989 23.9985C24.9383 23.9985 22.8785 24.0052 20.8179 23.9885C20.6008 23.9868 20.3487 23.89 20.1767 23.7556C19.968 23.5919 19.9463 23.3214 20.0615 23.0684C20.1809 22.8063 20.3904 22.6735 20.6793 22.6727C21.4074 22.671 22.1363 22.671 22.8643 22.671C23.4663 22.6693 24.07 22.6693 24.6736 22.6693Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1013_2423">
                                        <rect width="40" height="40" transform="translate(0 1.33044)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className="block text-center">Connects</p>
                    </Link>

                    <Link to="/dashboard/reports">
                        <div className="grid-item">
                            <svg className={props.name === 'reports' ? 'current' : ''} fill="none" stroke="currentColor" viewBox="-4 -3 30 30" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1009_2410)">
                                    <path strokeWidth={.1} d="M7.20314 9.59518C7.20314 9.45536 7.20314 9.35463 7.20314 9.25389C7.20314 8.20372 7.20089 7.15354 7.2039 6.10336C7.20615 5.2772 7.69027 4.79985 8.51944 4.7991C10.3665 4.79834 12.2142 4.7991 14.0612 4.7991C14.1635 4.7991 14.265 4.7991 14.4055 4.7991C14.4055 4.67957 14.4055 4.57959 14.4055 4.47961C14.4055 3.41966 14.4033 2.36046 14.4063 1.30051C14.4086 0.482616 14.8821 0.00375845 15.6955 0.00300671C18.0304 -2.42668e-07 20.3653 -2.42668e-07 22.7002 0.00300671C23.5174 0.00375845 23.9977 0.478857 23.9977 1.29299C24 6.8348 24 12.3774 23.9977 17.9192C23.9977 18.7235 23.5031 19.2039 22.6904 19.2047C15.564 19.2054 8.43675 19.2054 1.31027 19.2047C0.483361 19.2047 0.0014971 18.7243 0.000745365 17.8936C-0.00150985 15.5677 -0.00150985 13.2426 0.000745365 10.9167C0.0014971 10.077 0.485616 9.59819 1.33358 9.59744C3.1618 9.59518 4.99078 9.59669 6.81901 9.59669C6.93177 9.59518 7.04378 9.59518 7.20314 9.59518ZM21.5869 16.7803C21.5869 11.9722 21.5869 7.19564 21.5869 2.41158C19.9864 2.41158 18.407 2.41158 16.8134 2.41158C16.8134 7.20842 16.8134 11.9857 16.8134 16.7803C18.4101 16.7803 19.9902 16.7803 21.5869 16.7803ZM9.61773 7.21894C9.61773 10.4146 9.61773 13.5959 9.61773 16.7773C11.2204 16.7773 12.7998 16.7773 14.3883 16.7773C14.3883 13.5824 14.3883 10.4078 14.3883 7.21894C12.7908 7.21894 11.2099 7.21894 9.61773 7.21894ZM7.18661 12.0195C5.58766 12.0195 4.00225 12.0195 2.41157 12.0195C2.41157 13.617 2.41157 15.1949 2.41157 16.7818C4.01051 16.7818 5.58992 16.7818 7.18661 16.7818C7.18661 15.1881 7.18661 13.6095 7.18661 12.0195Z" fill="black" />
                                    <path d="M12 21.6087C15.5354 21.6087 19.0701 21.608 22.6055 21.6102C22.7822 21.6102 22.9664 21.611 23.1348 21.6568C23.7159 21.8139 24.0594 22.3559 23.9895 22.9716C23.9256 23.5302 23.4452 23.9669 22.8604 23.9962C22.7672 24.0007 22.6732 24 22.5792 24C15.5272 24 8.47586 24.0007 1.4238 23.9985C1.23737 23.9985 1.04417 23.9985 0.86676 23.9511C0.284914 23.7948 -0.0571269 23.2535 0.0120331 22.6363C0.0751791 22.0778 0.556292 21.6245 1.14114 21.6155C2.09736 21.6004 3.05432 21.6087 4.01053 21.6087C6.67319 21.6087 9.3366 21.6087 12 21.6087Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1009_2410">
                                        <rect width="40" height="40" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className="block text-center">Reports</p>
                    </Link>

                    <Link to="#">
                        <div className="grid-item">
                            <svg className={props.name === 'balance' ? 'current' : ''} viewBox="-5 -9 43 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1011_2378)">
                                    <path d="M35.5943 11.4361C35.5943 14.3324 35.5943 17.2276 35.5932 20.1239C35.5932 20.3082 35.5989 20.4949 35.567 20.6758C35.4156 21.5589 34.6383 22.0426 33.8269 21.6659C32.0345 20.834 30.1568 20.892 28.271 21.04C25.5523 21.2516 22.961 22.0483 20.3617 22.8153C16.9396 23.8236 13.4447 24.2356 9.88268 23.8703C6.71781 23.5459 3.7134 22.6708 0.914971 21.131C0.300432 20.793 -0.00342305 20.3162 -0.00114698 19.5867C0.0147855 13.8499 0.0079573 8.11418 0.00909533 2.37963C0.00909533 1.40547 0.603149 0.735169 1.43278 0.778415C1.61145 0.787519 1.80719 0.828488 1.95969 0.917255C3.80672 1.98814 5.83356 2.50709 7.91502 2.83712C12.1212 3.50287 16.2193 3.00099 20.2502 1.68657C23.3217 0.683958 26.4593 -0.00796683 29.7163 -5.88167e-07C31.2584 0.00341351 32.7731 0.172981 34.2207 0.751102C34.792 0.979847 35.2984 1.27915 35.4873 1.91417C35.5511 2.12698 35.5897 2.35687 35.5897 2.57878C35.5966 5.53084 35.5943 8.48404 35.5943 11.4361ZM32.8471 18.4839C32.8539 18.3804 32.8676 18.2689 32.8676 18.1573C32.8687 13.274 32.8653 8.38959 32.8767 3.50628C32.8778 3.19787 32.7595 3.08635 32.4909 3.01124C30.901 2.57082 29.2896 2.61406 27.6736 2.79501C25.2245 3.06928 22.8642 3.72706 20.5267 4.48158C15.1393 6.22163 9.71425 6.52549 4.24258 4.88672C3.74754 4.73877 3.25932 4.56579 2.73355 4.39281C2.73355 4.61473 2.73355 4.78429 2.73355 4.95386C2.73355 9.24197 2.73355 13.5289 2.73355 17.8171C2.73355 19.169 2.72786 19.1827 3.98425 19.696C8.43966 21.5157 13.0191 21.7717 17.6748 20.6633C19.3409 20.2661 20.9649 19.6982 22.6184 19.2464C25.0083 18.5932 27.4369 18.1585 29.9246 18.2211C30.8828 18.245 31.8376 18.3895 32.8471 18.4839Z" fill="black" />
                                    <path d="M13.1079 12.6709C13.1136 10.0944 15.1552 8.05159 17.7271 8.04818C20.3105 8.04476 22.3874 10.1262 22.3692 12.7016C22.351 15.2997 20.29 17.3368 17.6975 17.3197C15.1222 17.3015 13.1022 15.2553 13.1079 12.6709ZM15.8335 12.6857C15.8335 13.785 16.6483 14.5987 17.7442 14.5941C18.8845 14.5885 19.6709 13.7258 19.6572 12.4945C19.647 11.5397 18.8026 10.7806 17.7442 10.7738C16.6551 10.7669 15.8335 11.5886 15.8335 12.6857Z" fill="black" />
                                    <path d="M29.5809 11.3348C29.5752 12.4581 28.675 13.3617 27.5552 13.3696C26.432 13.3776 25.492 12.4364 25.4999 11.3121C25.5079 10.1774 26.4365 9.2727 27.578 9.28864C28.708 9.30457 29.5877 10.2025 29.5809 11.3348Z" fill="black" />
                                    <path d="M9.81894 13.3594C9.82236 14.4997 8.90055 15.4238 7.77048 15.4135C6.65635 15.4033 5.74592 14.4894 5.73795 13.3765C5.73112 12.2464 6.65748 11.3257 7.79552 11.3314C8.92559 11.3382 9.81553 12.2305 9.81894 13.3594Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1011_2378">
                                        <rect width="40" height="40" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className="block text-center">Balance</p>
                    </Link>

                    <Link to="#">
                        <div className="grid-item">
                            <svg className={props.name === 'account-settings' ? 'current' : ''} fill="none" stroke="currentColor" viewBox="-8 -2 40 40" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1011_2404)">
                                    <path d="M1.38591 32C0.957625 31.833 0.816534 31.5158 0.826552 31.0658C0.857442 29.6298 0.75392 28.1822 0.89668 26.7588C1.31411 22.612 3.52898 19.7669 7.37767 18.1865C7.57887 18.1038 7.78758 18.0412 8.05807 17.946C6.23725 16.8307 5.03339 15.2904 4.55502 13.2366C4.07498 11.172 4.42979 9.24685 5.62363 7.49199C7.32257 4.9941 10.7922 3.51056 14.4063 4.85802C14.5758 4.56916 14.7461 4.27362 14.9214 3.98226C15.4315 3.13488 16.4317 2.81847 17.2649 3.35027C17.8067 3.6959 18.184 3.68588 18.6683 3.28515C18.9972 3.01299 19.4221 2.85019 19.8212 2.67571C20.0191 2.58972 20.0767 2.49037 20.0733 2.28416C20.0683 1.96358 20.0608 1.63297 20.1284 1.32324C20.2946 0.557682 20.9633 0.0275487 21.7455 0.00834704C22.2556 -0.00417578 22.7657 0.000833348 23.2758 0.00500762C24.2785 0.014191 25.0649 0.717139 25.0324 1.72063C25.0115 2.37099 25.1893 2.70827 25.8121 2.91531C26.2145 3.04889 26.571 3.34192 26.925 3.59572C27.0911 3.7151 27.1971 3.6959 27.3658 3.61659C27.7557 3.43292 28.1489 3.20417 28.5638 3.13822C29.2517 3.02969 29.7977 3.35946 30.1676 3.94385C30.4506 4.39217 30.7161 4.85218 30.974 5.31552C31.3973 6.07774 31.1552 7.03532 30.4214 7.51787C30.1609 7.68901 29.7794 7.78502 29.655 8.02212C29.5331 8.25421 29.6884 8.62155 29.6875 8.92877C29.6867 9.31281 29.68 9.70185 29.6199 10.0792C29.5823 10.3171 29.6608 10.4182 29.8503 10.51C30.0273 10.5968 30.1959 10.702 30.3612 10.8105C31.1602 11.3332 31.4073 12.3016 30.9465 13.1364C30.7052 13.5731 30.4472 14.0014 30.1893 14.4288C29.6909 15.2536 28.7066 15.5859 27.9001 15.0741C27.3099 14.6993 26.8999 14.7235 26.384 15.1585C26.0668 15.4256 25.6418 15.5692 25.2553 15.7462C25.11 15.813 25.0507 15.8831 25.0532 16.0434C25.0574 16.3339 25.0624 16.6286 25.0223 16.915C24.9038 17.7524 24.2526 18.3509 23.4136 18.3843C22.8417 18.4069 22.2673 18.4086 21.6963 18.3835C20.7804 18.3434 20.0374 17.6096 20.0884 16.6929C20.1242 16.0501 19.9514 15.6986 19.3245 15.4949C18.9296 15.3663 18.5873 15.0758 18.2642 14.8838C17.8392 15.4523 17.4519 16.0768 16.9576 16.5994C16.4634 17.1229 15.8615 17.5445 15.3105 18.0078C15.5609 18.1005 15.8673 18.1932 16.1562 18.3226C20.0508 20.0691 22.1671 23.0604 22.3859 27.3365C22.451 28.6138 22.3925 29.8978 22.4059 31.1785C22.4092 31.5542 22.2331 31.8005 21.9451 31.9992C15.0926 32 8.23924 32 1.38591 32ZM21.0276 30.6258C21.0367 30.5348 21.0509 30.4547 21.0509 30.3745C21.0526 29.4478 21.0635 28.5212 21.0493 27.5945C20.9883 23.6907 18.6006 20.4239 14.9298 19.2885C13.0213 18.6982 11.056 18.745 9.115 19.0781C5.41742 19.7126 2.40109 23.1372 2.20073 26.8848C2.13728 28.0795 2.16817 29.2784 2.15731 30.4755C2.15731 30.5231 2.17902 30.5707 2.19321 30.6258C8.46298 30.6258 14.7202 30.6258 21.0276 30.6258ZM11.5845 17.5662C14.9665 17.562 17.5754 14.9589 17.5713 11.5928C17.5671 8.33519 14.8797 5.67367 11.5987 5.67618C8.30102 5.67952 5.63699 8.32267 5.63532 11.5928C5.63365 14.8846 8.30853 17.5704 11.5845 17.5662ZM15.5776 5.50754C15.6319 5.55178 15.6695 5.58518 15.7104 5.61523C18.321 7.52705 19.337 10.0759 18.7501 13.2567C18.7158 13.4403 18.7551 13.5413 18.8937 13.6507C19.4714 14.109 20.1101 14.4463 20.8138 14.6642C21.2972 14.8137 21.4266 14.9932 21.43 15.5024C21.4325 15.8355 21.4275 16.1686 21.4316 16.5026C21.4358 16.9092 21.5669 17.0386 21.981 17.0427C22.3976 17.0469 22.8142 17.0477 23.2307 17.0427C23.624 17.0377 23.76 16.9016 23.7634 16.5168C23.7667 16.1419 23.7592 15.7671 23.7659 15.3922C23.7726 15.019 23.922 14.8045 24.2752 14.696C25.1459 14.4305 25.9156 13.9947 26.5919 13.3861C26.8782 13.1289 27.1354 13.1081 27.4793 13.2951C27.8083 13.4737 28.1313 13.6641 28.4586 13.8452C28.7817 14.0239 28.9495 13.9863 29.1348 13.6816C29.3619 13.3084 29.5848 12.9327 29.8011 12.5529C29.9806 12.2381 29.9238 12.0411 29.604 11.8533C29.2901 11.6688 28.9704 11.4943 28.6548 11.3131C28.2958 11.1069 28.1831 10.8815 28.2758 10.4833C28.4795 9.61586 28.4812 8.75262 28.2749 7.88604C28.1806 7.48781 28.2883 7.27242 28.6565 7.0587C28.9804 6.87002 29.3093 6.69053 29.6324 6.50185C29.9163 6.33571 29.9714 6.16039 29.8144 5.88239C29.5898 5.48333 29.3578 5.08844 29.1182 4.69856C28.9537 4.43141 28.7558 4.38132 28.4812 4.52992C28.143 4.71276 27.8124 4.91145 27.476 5.09762C27.0945 5.30884 26.8557 5.29048 26.5359 5.00662C25.8722 4.41638 25.1167 3.99561 24.2726 3.72345C23.8686 3.59321 23.7408 3.41372 23.7333 2.98878C23.7258 2.60391 23.7392 2.21821 23.7275 1.83334C23.7175 1.5186 23.5722 1.37834 23.2591 1.3725C22.8008 1.36499 22.3425 1.36582 21.8841 1.37167C21.5368 1.37584 21.3924 1.52194 21.3866 1.86673C21.3807 2.22071 21.3866 2.57469 21.3849 2.92867C21.3824 3.38784 21.2379 3.6024 20.8055 3.73764C19.9781 3.99645 19.2435 4.41221 18.5998 4.99243C18.2659 5.29298 18.0346 5.31302 17.6355 5.09178C17.2991 4.90561 16.9685 4.70691 16.6295 4.52575C16.3515 4.37798 16.1528 4.43558 16.0001 4.70608C15.8515 4.96488 15.7195 5.23454 15.5776 5.50754Z" fill="black" />
                                    <path d="M22.516 12.8818C20.5057 12.881 18.8243 11.2321 18.8201 9.25771C18.8168 7.19144 20.4489 5.51255 22.4593 5.51589C24.5305 5.51922 26.1969 7.1689 26.1877 9.20595C26.1777 11.2405 24.538 12.8818 22.516 12.8818ZM22.4876 11.5627C23.7942 11.5619 24.872 10.495 24.8645 9.21096C24.857 7.89105 23.7942 6.83579 22.4735 6.83913C21.1711 6.84247 20.1384 7.87936 20.1384 9.18424C20.1384 10.4908 21.1978 11.5644 22.4876 11.5627Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1011_2404">
                                        <rect width="30.3637" height="32" fill="white" transform="translate(0.818176 -1.90735e-06)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className="block text-center">Account Settings</p>
                    </Link>
                </div>

            </aside>
        </>
    );
};

export default sidebar;
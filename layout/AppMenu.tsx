/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '../types/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [{ label: 'Нүүр хуудас', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'UI Components',
            items: [
                { label: 'Үүрэг даалгавар', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
                { label: 'Зүтгүүрийн бүртггэл', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
                // { label: 'Үүрэг даалгавар', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
                { label: 'Админастор', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' }
            ]
        },

        {
            label: 'Бааз',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                // {
                //     label: 'Landing',
                //     icon: 'pi pi-fw pi-globe',
                //     to: '/landing'
                // },
                {
                    label: 'Засвар, үйлчилгээний,явц  тайлан, мэдээ',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Засварын ажлын хоногийн мэдээ',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/auth/error'
                        }
                    ]
                },
                {
                    label: 'Төмөр замын үндсэн өгөгдөл,лавлагаа',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Байгууллага, нэгж',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/department'
                        },
                        {
                            label: 'Цех, тасаг',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/unit'
                        },
                        {
                            label: 'Суваг, зогсоол',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/channel'
                        },
                        {
                            label: 'Засварын төрөл',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/repair'
                        },
                        {
                            label: 'Илчит тэрэгний сери',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/locomotive'
                        },
                        {
                            label: 'Илчит тэрэгний дугаар',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/locomotive-number'
                        },
                        {
                            label: 'Галт тэрэгний төрөл',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/train'
                        },
                        {
                            label: 'Суудлын г/т-ний бүртгэл',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/passenger-train'
                        },
                        {
                            label: 'Үзлэгийн үнэлгээ',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/rate'
                        },
                        {
                            label: 'Эвдрэл, гэмтэл',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/damage'
                        },
                        {
                            label: 'Өртөө, зөрлөг',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/Station'
                        },
                        {
                            label: 'Ачааны г/т-ний явах хугацаа',
                            icon: 'pi pi-fw pi-circle-off',
                            to: '/cargo-train'
                        }
                    ]
                },
                {
                    label: 'Ашиглалт, үйлчилгээний байдал, мэдээ',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/pages/crud'
                },
                {
                    label: 'Timeline',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/pages/timeline'
                },
                {
                    label: 'Not Found',
                    icon: 'pi pi-fw pi-exclamation-circle',
                    to: '/pages/notfound'
                },
                {
                    label: 'Empty',
                    icon: 'pi pi-fw pi-circle-off',
                    to: '/pages/empty'
                }
            ]
        },
        {
            label: 'Hierarchy',
            items: [
                {
                    label: 'Submenu 1',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 1.1',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        },
                        {
                            label: 'Submenu 1.2',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                        }
                    ]
                },
                {
                    label: 'Submenu 2',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 2.1',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        },
                        {
                            label: 'Submenu 2.2',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Get Started',
            items: [
                {
                    label: 'Тусламж',
                    icon: 'pi pi-fw pi-question',
                    to: '/documentation'
                },
                {
                    label: 'Гарах',
                    icon: 'pi pi-fw pi-sign-in',
                    to: '/auth/login'
                }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

                <Link href="https://blocks.primereact.org" target="_blank" style={{ cursor: 'pointer' }}>
                    <img alt="Prime Blocks" className="w-full mt-3" src={`/layout/images/banner-primeblocks${layoutConfig.colorScheme === 'light' ? '' : '-dark'}.png`} />
                </Link>
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;

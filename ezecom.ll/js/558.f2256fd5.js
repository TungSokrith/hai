"use strict";
(self["webpackChunkezecom"] = self["webpackChunkezecom"] || []).push([[558], {
    40558: function(t, e, s) {
        s.r(e),
        s.d(e, {
            default: function() {
                return r
            }
        });
        var i = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("v-footer", {
                attrs: {
                    id: "dashboard-core-footer",
                    padless: "",
                    absolute: ""
                }
            }, [i("v-container", [i("div", {
                staticClass: "footer-navigation w-100 pt-3 pb-3"
            }, [i("div", {
                staticClass: "footer-menu"
            }, [i("div", {
                staticClass: "social"
            }, [i("a", {
                staticClass: "social-icon",
                attrs: {
                    href: "https://www.facebook.com/ezecom/"
                }
            }, [i("v-icon", [t._v("mdi-facebook")])], 1), i("a", {
                staticClass: "social-icon",
                attrs: {
                    href: "https://www.instagram.com/ezecomcambodia/"
                }
            }, [i("v-icon", [t._v("mdi-instagram")])], 1), i("a", {
                staticClass: "social-icon",
                attrs: {
                    href: "https://www.linkedin.com/company/ezecom/"
                }
            }, [i("v-icon", [t._v("mdi-linkedin")])], 1), i("a", {
                staticClass: "social-icon",
                attrs: {
                    href: "https://www.youtube.com/channel/UCxVO-rcWFmwFY0_Ph1LHENg"
                }
            }, [i("v-icon", [t._v("mdi-youtube")])], 1), i("a", {
                staticClass: "social-icon",
                attrs: {
                    href: "https://twitter.com/EZECOM_ISP"
                }
            }, [i("img", {
                staticStyle: {
                    height: "20px",
                    "margin-top": "10px",
                    "/*margin-right": "50px*/"
                },
                attrs: {
                    src: s(85336)
                }
            })]), i("a", {
                staticClass: "social-icon",
                attrs: {
                    href: "https://t.me/ezecom"
                }
            }, [i("v-icon", [t._v("mdi-telegram")])], 1), i("a", {
                staticClass: "social-icon",
                attrs: {
                    href: "https://www.tiktok.com/@ezecomofficial"
                }
            }, [i("img", {
                staticStyle: {
                    height: "20px",
                    "margin-top": "10px",
                    "/*margin-right": "50px*/"
                },
                attrs: {
                    src: s(80352)
                }
            })])]), i("div", [i("div", {
                staticClass: "social"
            }, [i("span", [t._v(t._s(t.$vuetify.lang.t("$vuetify.pages.footer.downloadApp")))]), i("a", {
                staticClass: "social-icon",
                attrs: {
                    href: "#"
                }
            }, [i("v-icon", [t._v("mdi-apple")])], 1), i("a", {
                staticClass: "social-icon",
                attrs: {
                    href: "#"
                }
            }, [i("v-icon", [t._v("mdi-google-play")])], 1)])])])]), i("div", {
                staticClass: "footer-navigation w-100"
            }, [i("div", {
                staticClass: "menu-footer-menu-container"
            }, [i("ul", {
                staticClass: "footer-menu"
            }, [t.isMode("personal") ? [i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.service.name")) + " ")]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "PersonalInternet"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.service.internet")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "FTTR"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.service.fttr")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.my_account.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "MyEze"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.my_account.my_eze")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "PaymentInvoice"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.my_account.payment_invoice")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "PaymentHistory"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.my_account.payment_history")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "MyOrders"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.my_account.my_orders")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Upgrade"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.my_account.upgrade")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.support.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Tickets"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.support.tickets")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Personal.FAQ"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.support.faq")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Personal.ContactUs"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.support.contactUs")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Channel"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.personal.support.channel")) + " ")])], 1)])])] : t._e(), t.isMode("business") ? [i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.Internet"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.internet")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.EnterpriseNetwork"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.enterprise_network")) + " ")]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.EnterpriseNetwork.DPLC"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.dplc")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.EnterpriseNetwork.IPLC"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.iplc")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.EnterpriseNetwork.MPLS"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.mpls")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.EnterpriseNetwork.VPLS"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.vpls")) + " ")])], 1)])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.DataCenter"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.data_center")) + " ")]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.DataCenter.Colocation"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.colocation")) + " ")])], 1)])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.CloudSolutions"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.cloud_solutions")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.DigitalHrService"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.digital_hr_service")) + " ")]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.DigitalHrService.MihcmForEnterprise"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.mihcm_for_enterprise")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.DigitalHrService.MiaForMsTeams"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.mia_for_ms_teams")) + " ")])], 1)])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.VMware"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.vm_ware")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.UnifiedCommunication"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.unified_communication")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.Aws"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.aws").replace("(AWS)", "")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.CloudDirectConnect"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.cloud_direct_connect")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.HuaweiCloud"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.huawei_cloud")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.DDoSProtection"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.enterprise.DDoS_protection")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.sme.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.sme.Internet"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.sme.internet")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.sme.DataCenter"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.sme.data_center")) + " ")]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.sme.DataCenter.Colocation"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.sme.colocation")) + " ")])], 1)])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.sme.CloudSolutions"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.sme.cloud_solutions")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.sme.DigitalHrService"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.sme.digital_hr_service")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.my_account.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "MyEze"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.my_account.my_eze")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "PaymentInvoice"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.my_account.payment_invoice")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "PaymentHistory"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.my_account.payment_history")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "MyOrders"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.my_account.my_orders")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Upgrade"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.my_account.upgrade")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.support.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Tickets"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.support.tickets")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.FAQ"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.support.faq")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Business.ContactUs"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.business.support.contactUs")) + " ")])], 1)])])] : t._e(), t.isMode("about_us") ? [i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.our_company.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.overview"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.our_company.overview")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.Achievement"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.our_company.achievement")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.NewsAndMedia"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.our_company.news_and_media")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.management_system.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.SeniorLeadershipTeam"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.management_system.senior_leadership_team")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.governance.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.CorePrinciple"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.governance.core_principle")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.QMS"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.governance.qms")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.ChildSafeCertified"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.governance.childsafe_certified")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.sustainability.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.CSR"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.sustainability.csr")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.EnvironmentESS"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.sustainability.environment_ess")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "AboutUs.Careers"
                    },
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.about_us.careers.name")) + " ")])], 1)] : t._e(), t.isMode("SelfCare") ? t._e() : [i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.coverage_map.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "CoverageMap"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.coverage_map.coverage")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "BranchPoints"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.coverage_map.branch_point")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("ul", [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                staticClass: "cursor-pointer",
                attrs: {
                    to: {
                        name: "MyEze",
                        action: "register"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.register")) + " ")])], 1), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                staticClass: "cursor-pointer",
                attrs: {
                    to: {
                        name: "PrivacyPolicy"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.PrivacyPolicy")) + " ")])], 1)])]), i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                staticClass: "cursor-pointer",
                attrs: {
                    to: {
                        name: "PayMyBill"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.pay_my_bill")) + " ")])], 1)], t.isMode("SelfCare") ? [i("li", {
                staticClass: "menu-item menu-item-has-children"
            }, [i("a", {
                attrs: {
                    target: "_self"
                }
            }, [t._v(t._s(t.$vuetify.lang.t("$vuetify.top_menu.ezecom.name")))]), i("ul", {
                staticClass: "sub-menu"
            }, [i("li", {
                staticClass: "menu-item"
            }, [i("router-link", {
                attrs: {
                    to: {
                        name: "Welcome"
                    },
                    target: "_self"
                }
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.top_menu.ezecom.home_page")) + " ")])], 1)])])] : t._e()], 2)])])]), i("div", {
                staticClass: "footer-navigation w-100 footer-copyright"
            }, [i("v-container", {
                staticClass: "py-0"
            }, [i("div", {
                staticClass: "footer-menu"
            }, [i("div", {
                staticClass: "copyright"
            }, [t._v(" " + t._s(t.$vuetify.lang.t("$vuetify.pages.footer.copyright")) + " ")])])])], 1)], 1)
        }
          , a = []
          , n = {
            name: "DashboardCoreFooter",
            data: ()=>({}),
            methods: {
                isMode(t) {
                    return this.$route.meta.mode === t
                }
            }
        }
          , u = n
          , l = s(1001)
          , m = (0,
        l.Z)(u, i, a, !1, null, null, null)
          , r = m.exports
    },
    80352: function(t) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAApCAYAAAC/QpA/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA1LTMxVDE1OjUzOjQ4KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNS0zMVQxNjowNToxOCswNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNS0zMVQxNjowNToxOCswNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyY2Y4NTM3MC1kNWI0LTdkNDUtYWQ3MC02ZTFkNzgyMzQ1ZDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MmNmODUzNzAtZDViNC03ZDQ1LWFkNzAtNmUxZDc4MjM0NWQxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MmNmODUzNzAtZDViNC03ZDQ1LWFkNzAtNmUxZDc4MjM0NWQxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyY2Y4NTM3MC1kNWI0LTdkNDUtYWQ3MC02ZTFkNzgyMzQ1ZDEiIHN0RXZ0OndoZW49IjIwMjMtMDUtMzFUMTU6NTM6NDgrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7IggU+AAACLUlEQVRYhcXYP2uUQRDH8Y/BRuRirRi4Kk1EIVYWUcRK0cIq9ppUgRgLW+MLENOkURS0svIPiFgoCimsDAimEkzAEGuTN2AxORMeb5/sc7ns/eCamWHvu/PMPjvzHJqdndUnXcKHLvZFzOQsMNQvkhqdzg0sATOBVk5gCRi4mRNUCua+jOyUghnGs72CSsHAddyrCygJA/NqgErDEEDfMVl1DAIGxvACv0SmJtE+PCCYjk6KTMH0oDLTVSVg5rGeE9hPmCMJ+4a4EjZLwtRpDWewUhdUsmbWcE60FF0f216nqYUr4uiNYmTbfqxHoC3R28xgHGdFxk7gax3MbXHBDVfsez77TC1v//6pG0wbb8WLqaiqMOP45P9sFNHuAm4PEoQdmBaWBgnCzmO6I+6JlNbxBt/w8yBhWnYuq26aw8JBAVRhbtT4p/G4BAhRM5cTvqWSIATMaMK3WBKEgBlJ+N6VBCFgUsd5q+FaR/fJYki68ckaSXfpeML+uwnMn4TvQkOY8wn7RhOYzwnf3QYg42JIq2oTP5rAvE/4JjCVsUYLzxO+jxrU3pBoF1J180j0NSm18UW63XiaC9KBgQc1MQ/FBDi1/ectXMVLrNaArIiNZqtzUT7BrZqFx0SWmqjx97lOZrbEbvvVUs6JeukJhujeL/YBaF6Pt3x1VFmWMd8ktIlroonvSd3mpjWcEqnOzdIrsYlGBVtV3aiyIAq7OjcNi1fBqjhRr8UG9q2/ifxX+2eVc/0AAAAASUVORK5CYII="
    },
    85336: function(t) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAApCAYAAABOScuyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyY2Y4NTM3MC1kNWI0LTdkNDUtYWQ3MC02ZTFkNzgyMzQ1ZDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjAyRjRCMTA1Q0RDMTFFRTgwODZCMjcxQUREMkE0MUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjAyRjRCMEY1Q0RDMTFFRTgwODZCMjcxQUREMkE0MUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUFBREM0NzE1Q0RBMTFFRUIzQkFDNzUyNkVGNDRGMjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUFBREM0NzI1Q0RBMTFFRUIzQkFDNzUyNkVGNDRGMjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7H631YAAAFE0lEQVR42tSZa4hVVRTHz5zRO687aiYN9qJAIiOm0qgZsun5pSj6kJS9Q8cPojJqjyEpJBTDKGZ6R09LCQ1LRS1TokTKD2VaSD76kGVWiJnznmYcr2vBb8Nic+5zzr1DC/54z5y9z/mf9V7bspaWluD/JKPM73sFk3Pc941gexH43C64ht+vC46lI6xk3xKMyfHBJwXrBTNjJPulYKpgLNdPC14VLLCLQv5dKzgs6Df3ToMoGSe4R/B8TGQ/FUwxZPujyFrCARtOmev/IKza7AI9XKtUCGbHQPZDwU0oIeAd70SR9QkPCd4QdHM9WjAgOA9XUSQF+wS9uFMCfy5UVIt3GbKdgjWC+ek2hN71k4Itgg4IKemfvTXXC/r4XS24TLC6ALLLBY+YuFHLbRI0Z9oURvxthuAvtKiEJwg+89a8bfxdtTNd8EIeZMcLFmGxAAVtFTyYbWOY5u/r0LD6cI2gUdBm7j9FlnD+XC54KEeyqtHjKMO5wU7BfblsTkf4GUE7AeC0qBVmqVlzP5mlm4+rFezI8r5qyA7xbt27R3BnrqYJM9xrFWzDXC7N+Sa7SpDiXpWgngiPkqW4msv/GgeHBDfm4/hhlvvqm3/z8HL8eYO3po0U6CyhrvGct+ZZikwCV9D1RygUQZyEVS41/qZBcoPgJXN/iWCj8Wcl9aj3jAf4mErI/oM1gmIQdqbv5LdWo3kEoxMNmF/JLC6wvuD3XkEd/jsI4YuNVYpCWIvF55AuI2j2eWummFJeTROzH3JJ9qhMpCAFxSTs8vMRtKQucjaJ3kq9qZTqAheh7RQf+qKxQtEJq1zLiwPSWBPl3Im6xScms1Tygardl8nfQSkJa15+zfhzkgaoyqzRgPvFmF0bqh8FC+No68IC9iyg4elkv2rvp4h+Y8B0dZME740UYTcZHMPcmsbOEWw297XPeBeLhPjxw3kMCLETVvmIYpKCiPrzm54ltuLPZaw7MJKElxBwPSYIZ1LVbKX8DfcYRe7+eqQIq/xLznVSBkkrDQTeEJa4kva05IRHU/FOeUPt+UwNTvoIuD5TKWcJzio14cOkswTFooNKp1q8TbDCrJ3vdX4p2sqSET5IJaugJzgheJ9B1fUSi7jv5G7BH6wP01TKohD+XnCuaWYUKykMO01pVp/9LqKJcpNMkny9opiEvxJcwstOE2SvkDECJofj3FPtXsiZg5NBJuVu489PUMJjJ7wBDdXigyn64sXeOtuUK6FbmZBtft5iyvtgxGQ+bMKraNzHQrQfso9HrD1BfnYBVoM/B948eNRUyglepRwWYa1ed5jDjm7M+liGPZruvjWleSiiyl1t3q9Wm5aLP2cj3MY0Mc6cH3zAgUsu/YabkKuZOuw82Et/3Gkyiz53WaGE22kd7cnMukzHSBGy1vQb+tG3eAeIrfQbXQRwf7bzjXSE9cvnmLmtgxmtOc+s0krXZvvnuWYIcEe9R+k3KvmwzfkQXkaQJMzJzC5GpEKkmXzcY/qNHzKcb4whP7dHPay8oaHBXlfhZyHoYti8eZhN0ioCsQItVnH8NRk3+Z2McQVrKgjKBLk/UsM1DJnloIcHXRfEIyu9/NxEdWzBAnPMZO1Gq+mZXOJPzJGgs9IIvzyITxaj6ZNmqq41SJps5AbYC/zzOvd/HI34Ty++NMB5QtzSTGmvN11btqTQGEV4F3mzjqZ8R1A8aaJ813m9dJSoxj+OIuxIl0p2F7rxjAADALX6MSKcbvBOAAAAAElFTkSuQmCC"
    }
}]);

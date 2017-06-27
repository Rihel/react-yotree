import React, { Component } from 'react';
import './header'
class Header extends Component {
    render() {
        return (
            <div>
                <section className="header container">
                    <div className="logo pull-left">
                        <a href="index.html">
                            <img src="http://www.gzyoushu.com/img/logo.png" alt="" />
                        </a>
                    </div>
                    <form className="search-bar pull-right">
                        <div className="search pull-left">
                            <input type="text" placeholder="搜索学生信息成绩" />
                                <button className="fa fa-search"></button>
                        </div>
                        <div className="sign-box pull-left">
                            <input type="button" value="登 录" />
                                        <input type="button" value="注册" />
                        </div>
                    </form>
                    <nav className="nav pull-left pb3   ">
                        <ul>
                            <li className="active"><a href="index.html">首页</a></li>

                            <li><a href="index.html#zhuanyeshezhi">专业设置</a></li>
                            <li><a href="gstd.html">公司团队</a></li>
                            <li><a href="html.html"><span className="fa fa-html5"></span>HTML5</a></li>
                            <li><a href="jz.html">项目合作</a></li>


                            <li><a href="stuworks.html">毕业作品</a></li>

                            <li><a href="ssap.html">食宿安排</a></li>
                            <li><a href="gyys.html">关于优树</a></li>
                            <li><a href="callus.html">联系我们</a></li>
                        </ul>
                    </nav>
                </section>
                <section className="banner">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item item1 active"></div>
                            <div className="item item2"></div>
                            <div className="item item3"></div>
                            <div className="item item4"></div>
                            <div className="item item5"></div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Header;
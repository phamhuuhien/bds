import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `     
  <div class="header-container">
    <div class="header-content">
    	<div class="logo">
    		<a href="http://www.lazada.vn/" class="logo__anchor">
                <img class="logo__image" src="http://vn-live-02.slatic.net/images/2014/logo/vn.png" width="124" height="39" alt="Mua sắm online Lazada.vn Logo">
    		</a>
		</div>
		<div class="header-search">
            <div class="input-group">
                <input class="input-group__textbox" type="text" placeholder="Tìm kiếm sản phẩm, thương hiệu hay nhãn hàng mong muốn …" value="" id="searchInput" name="q">
                <div class="input-group__button-container">
                    <button class="input-group__button input-group__button_type_search" id="searchSubmit">
                        <span class="input-group__icon">
                            <i class="icon icon-magnify-header"></i>
                        </span>
                    </button>
                </div>
            </div>
		</div>
    </div>
  </div>
  `,
  styleUrls: ['./header.component.css']
})
export class Header {  
  constructor() { }
 };
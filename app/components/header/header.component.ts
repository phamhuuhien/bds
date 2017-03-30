import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `     
  <div class="header-container">
    <div class="header-content">
    	<div class="logo">
    		<a href="#" class="logo__anchor">
                <img class="logo__image" src="./images/icon.png" alt="Mua sắm online Lazada.vn Logo">
    		</a>
		</div>
		<div class="header-search">
            <input class="input-group__textbox" type="text" placeholder="Tìm kiếm sản phẩm, thương hiệu hay nhãn hàng mong muốn …" value="" id="searchInput" name="q">
            <div class="button-group">
                <button class="search-button" id="searchSubmit">
                </button>
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
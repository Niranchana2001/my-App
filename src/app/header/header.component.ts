import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    productName = "not yet created"
    createProduct(){
        this.productName = "Product created successfully!"
    }

}
  
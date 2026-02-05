import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
offers = [
  {
    bank: 'HDFC Bank Credit Card',
    discount: 'Flat 20% off on all orders above ₹999',
    validity: '31 Oct 2025',
    logo: 'https://5.imimg.com/data5/RE/SP/EN/SELLER-95153528/hdfc-logo-1000x1000.png'
  },
  {
    bank: 'ICICI Bank Debit Card',
    discount: 'Get 15% cashback up to ₹200',
    validity: '15 Nov 2025',
    logo: 'https://brandeps.com/logo-download/I/ICICI-Bank-logo-vector-01.svg'
  },
  {
    bank: 'SBI Credit Card',
    discount: '₹300 instant discount on orders above ₹1500',
    validity: '30 Nov 2025',
    logo: 'https://i0.wp.com/wordzz.com/wp-content/uploads/2016/10/sbi.jpg?fit=500%2C375&ssl=1'
  },
  {
    bank: 'Axis Bank Credit Card',
    discount: '10% off up to ₹250 on weekends',
    validity: '31 Dec 2025',
    logo: 'https://banner2.cleanpng.com/20180514/sqq/kisspng-axis-bank-finance-mortgage-loan-5af940f8438882.1608432715262845362766.jpg'
  },
  {
    bank: 'Kotak Mahindra Bank',
    discount: 'Get 5% cashback on food orders every Friday',
    validity: '30 Nov 2025',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Kotak_Mahindra_Bank_logo.svghttps://brandlogos.net/wp-content/uploads/2014/01/kotak-vector-logo.png'
  },
  {
    bank: 'American Express Card',
    discount: 'Flat ₹400 off on first 3 transactions above ₹2000',
    validity: '31 Dec 2025',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg'
  },
  {
    bank: 'Paytm Wallet',
    discount: '10% cashback up to ₹100 on food delivery',
    validity: '15 Dec 2025',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png'
  },
  {
    bank: 'PhonePe UPI',
    discount: 'Get ₹50 cashback on 3rd order using PhonePe',
    validity: '31 Oct 2025',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/PhonePe_Logo.png'
  },
  {
    bank: 'Amazon Pay',
    discount: '₹100 cashback on orders above ₹999',
    validity: '31 Oct 2025',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Amazon_Pay_logo.svg'
  },
  {
    bank: 'Google Pay',
    discount: 'Scratch card up to ₹200 cashback',
    validity: '30 Nov 2025',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Pay_Logo.svg'
  },
  {
    bank: 'Standard Chartered Bank',
    discount: 'Flat ₹250 off on orders above ₹1200',
    validity: '15 Nov 2025',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Standard_Chartered_Bank.svg'
  },
  {
    bank: 'Yes Bank Credit Card',
    discount: '15% off on dining and delivery every weekend',
    validity: '31 Dec 2025',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Yes_Bank_logo.svg'
  }
];

}

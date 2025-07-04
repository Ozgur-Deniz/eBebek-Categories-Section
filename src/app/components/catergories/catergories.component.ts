import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  name: string;
  icon: string;
  properties: {
    subName: string;
    subCategories: string[];
  }[];
  photos?: string[];
}

@Component({
  selector: 'app-catergories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catergories.component.html',
  styleUrl: './catergories.component.css',
})
export class CatergoriesComponent {
  categories: Category[] = [
    {
      name: 'Giyim & Tekstil',
      icon: 'fa-solid fa-shirt',
      properties: [
        {
          subName: 'Yeni Doğan Giyim',
          subCategories: [
            'Hastane Çıkış Seti',
            'Yenidoğan Tulum',
            'Yenidoğan Takım',
          ],
        },
        {
          subName: 'Alt Üst Takım',
          subCategories: ['Eşofman Takımı', 'Şortlu Takım', 'Taytlı Takım'],
        },
        {
          subName: 'Üst Giyim',
          subCategories: ['Body', 'Tişört', 'Sweatshirt'],
        },
        {
          subName: 'Çorap',
          subCategories: ['Soket Çorap', 'Külotlu Çorap', 'Bilek Çorap'],
        },
        {
          subName: 'Dış Giyim',
          subCategories: ['Mont', 'Ceket', 'Yağmurluk'],
        },
        {
          subName: 'Ayakkabı',
          subCategories: [
            'Spor Ayakkabı',
            'İlk Adım Ayakkabı',
            'Deniz Ayakkabısı',
          ],
        },
        {
          subName: 'Pijama & Üst Giyim',
          subCategories: ['Pijama Takım', 'İç Giyim', 'Atlet'],
        },
        {
          subName: 'Çanta',
          subCategories: ['Bebek Çantası', 'Anne Bebek Bakım Çantası'],
        },
        {
          subName: 'Alt Giyim',
          subCategories: ['Eşofman Altı', 'Tayt'],
        },
        {
          subName: 'Tulum',
          subCategories: ['Patikli Tulum', 'Patiksiz Tulum '],
        },
        {
          subName: 'Aksesuar',
          subCategories: ['Saç Aksesuarı', 'Güneş Gözlüğü '],
        },
        {
          subName: 'Anne İç Giyim',
          subCategories: ['Hamile İç Giyim', 'Hamile Pijama'],
        },
      ],
      photos: [
        'https://cdn05.e-bebek.com/media/c/hellobaby-logo.png',
        'https://cdn05.e-bebek.com/media/c/little-dreams-b3159bgbg.png',
        'https://cdn05.e-bebek.com/media/c/babymomm.png',
        'https://cdn05.e-bebek.com/media/c/babywalkk.png'
      ],
    },
    {
      name: 'Mobilya',
      icon: 'fa-solid fa-bed',
      properties: [
        {
          subName: 'Bebek Odası Mobilyası',
          subCategories: ['Beşik', 'Bebek Yatağı', 'Karyola'],
        },
      ],
    },
    {
      name: 'Banyo & Bakım',
      icon: 'fa-solid fa-shower',
      properties: [
        {
          subName: 'Bebek Odası Mobilyası',
          subCategories: ['Beşik', 'Bebek Yatağı', 'Karyola'],
        },
      ],
    },
    {
      name: 'Bez & Mendil',
      icon: 'fa-solid fa-bed',
      properties: [
        {
          subName: 'Bebek Odası Mobilyası',
          subCategories: ['Beşik', 'Bebek Yatağı', 'Karyola'],
        },
      ],
    },
    {
      name: 'Oyuncak & Kitap',
      icon: 'fa-solid fa-car-side',
      properties: [
        {
          subName: 'Bebek Odası Mobilyası',
          subCategories: ['Beşik', 'Bebek Yatağı', 'Karyola'],
        },
      ],
    },
    {
      name: 'Araç & Gereç',
      icon: 'fa-solid fa-bottle-water',
      properties: [
        {
          subName: 'Bebek Odası Mobilyası',
          subCategories: ['Beşik', 'Bebek Yatağı', 'Karyola'],
        },
      ],
    },
    {
      name: 'Beslenme',
      icon: 'fa-solid fa-utensils',
      properties: [
        {
          subName: 'Bebek Odası Mobilyası',
          subCategories: ['Beşik', 'Bebek Yatağı', 'Karyola'],
        },
      ],
    },
    {
      name: 'Emzirme',
      icon: 'fa-solid fa-person-breastfeeding',
      properties: [
        {
          subName: 'Bebek Odası Mobilyası',
          subCategories: ['Beşik', 'Bebek Yatağı', 'Karyola'],
        },
      ],
    },
  ];
  hoveredCategory: any = this.categories[0];
}

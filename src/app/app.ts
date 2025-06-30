import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatDividerModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'StreamHub - Angular Media Streaming';

  quickAccessItems = [
    { title: 'Liked Songs', subtitle: '143 songs', icon: 'favorite', color: '#4caf50' },
    { title: 'Discover Weekly', subtitle: '30 songs', icon: 'explore', color: '#9c27b0' },
    { title: 'Recently Played', subtitle: 'Mix', icon: 'history', color: '#f44336' }
  ];

  featuredItems = [
    {
      title: 'Epic Playlist',
      artist: 'Various Artists',
      description: 'The best music for your daily life',
      image: 'https://via.placeholder.com/300x300/3f51b5/ffffff?text=Epic+Playlist'
    },
    {
      title: 'Chill Vibes',
      artist: 'Relaxation Station',
      description: 'Perfect background music for work and study',
      image: 'https://via.placeholder.com/300x300/009688/ffffff?text=Chill+Vibes'
    },
    {
      title: 'Workout Hits',
      artist: 'Energy Mix',
      description: 'High energy tracks to boost your workout',
      image: 'https://via.placeholder.com/300x300/ff5722/ffffff?text=Workout+Hits'
    }
  ];

  musicLibrary = [
    { title: 'Song One', artist: 'Artist A', duration: '3:45' },
    { title: 'Amazing Track', artist: 'Artist B', duration: '4:12' },
    { title: 'Favorite Song', artist: 'Artist C', duration: '3:28' },
    { title: 'Background Music', artist: 'Artist D', duration: '5:03' },
    { title: 'Chill Beat', artist: 'Artist E', duration: '3:56' }
  ];
}

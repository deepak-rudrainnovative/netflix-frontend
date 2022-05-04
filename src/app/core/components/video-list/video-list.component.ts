import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { UtilityService } from '../../services/utility.service';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoList:any=[]
  constructor(private videoService:VideoService,private utilityService:UtilityService) { }

  ngOnInit(): void {
    this.videoService.getAllVideosList().subscribe((resp)=>{
      this.videoList=resp.body;
      this.utilityService.videos.next(resp.body)
    })
  }

}

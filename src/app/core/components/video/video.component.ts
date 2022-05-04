import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videoUrl:string=environment.videoUrl;
  videoId:any='';
  message:string='';
  constructor(private route:ActivatedRoute,private utilityService:UtilityService) { }

  ngOnInit(): void {
    this.videoId=this.route.snapshot.paramMap.get('id');
    
  }

}

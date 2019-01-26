import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FlickrService } from "../../services/flickr.services"

@Component({
    templateUrl: "components/image-component/image.component.html"
})
export class ImageComponent implements OnInit {
    public url: string;

    public constructor(private activatedRoute: ActivatedRoute, private flickrService: FlickrService) {}

    public ngOnInit(){
        this.activatedRoute.params.subscribe(params =>{
            let photoId = params["photoId"];
            this.getPhoto(photoId);

        });
    }

    public getPhoto(photoId: number) {
        this.flickrService.getPhotoInfo(photoId).subscribe(
            photo => {
                this.url=`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.secret}_n.jpg`;
            }
        ,error=> console.log(error)
            
        )
    }
}
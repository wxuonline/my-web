import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from "rxjs";
// import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'my-resume',
    templateUrl: './resume-2018.component.html',
    styleUrls: [ './resume-2018.component.less' ]
})

export class Resume2018Component {

    // @ViewChild('backdropCanvas') backdropCanvas: ElementRef;

    ngAfterViewInit() {
        // const [mediaWidth, mediaHeight] = [document.documentElement.clientWidth, document.documentElement.clientHeight];
        // this.backdropCanvas.nativeElement.width = document.documentElement.clientWidth;
        // this.backdropCanvas.nativeElement.height = document.documentElement.clientHeight;

        // Observable.fromEvent(window, 'resize').debounceTime(300).subscribe(() => {
        //     this.backdropCanvas.nativeElement.width = document.documentElement.clientWidth;
        //     this.backdropCanvas.nativeElement.height = document.documentElement.clientHeight;
        // })

    }



}


// import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild  } from '@angular/core';

// class KtCircleCanvas {
//     x: number;
//     y: number;
//     radius: number;
//     title: string;
//     content: string;
//     fillColor: string;
//     fontSize: number;
// }

// @Component({
//     selector: 'kt-circle-canvas',
//     templateUrl: `
//         <div style="height: 100%; width: 100%;position: relative;" id="canvas">
//             <canvas #backdropCanvas class="canvas"></canvas>
//             <canvas #canvas_rank2 class="canvas"></canvas>
//             <canvas #canvas_rank3 class="canvas"></canvas>
//         </div>
//     `,
//     // styleUrls: ['./circle-canvas.component.scss']
// })
// export class KtCircleCanvasComponent implements OnInit, AfterViewInit,OnChanges {

//     @ViewChild('backdropCanvas') backdropCanvas: ElementRef;
//     @ViewChild('canvas_rank2') canvas_rank2: ElementRef;
//     @ViewChild('canvas_rank3') canvas_rank3: ElementRef;

//     @Input() circleCanvasObjs: KtCircleCanvas[];
//     private windowResizeSubscription: Subscription;

//     private canvasWidth: number;
//     private canvasHeight: number;

//     constructor(private _elementRef: ElementRef) {
//     }

//     ngOnInit() {
//     }

//     ngOnChanges(changes: SimpleChanges) {
//         if(changes['circleCanvasObjs']){
//             if(this.circleCanvasObjs && this.circleCanvasObjs.length) {
//                 if(this.canvasHeight) {
//                     let node = $(this._elementRef.nativeElement).find('#canvas');
//                     let width = node.width();
//                     let height = node.height();
//                     let baseWidth = 391;
//                     let baseHeight = 176;
//                     let heightRatio: number = height / baseHeight ;
//                     let widthRatio: number = width / baseWidth;
//                     this.draw_rank(width,height,heightRatio,widthRatio);
//                 }
//             }
//         }

//     }

//     ngAfterViewInit() {
//         let node = $(this._elementRef.nativeElement).find('#canvas');
//         let baseWidth = 391;
//         let baseHeight = 176;
//         this.canvasWidth = node.width();
//         this.canvasHeight = node.height();
//         let heightRatio = this.canvasHeight / baseHeight;
//         let widthRatio = this.canvasWidth / baseWidth;
//         // console.log('width',this.canvasWidth);
//         // console.log('height',this.canvasHeight);
//         this.windowResizeSubscription = Observable.fromEvent($(window), "resize")
//             .debounceTime(250)
//             .subscribe(() => {
//             let width = node.width();
//             let height = node.height();

//             let heightRatio: number = height / baseHeight;
//             let widthRatio: number = width / baseWidth;
//             this.draw_rank(width,height,heightRatio,widthRatio);
//             });
//             this.draw_rank(this.canvasWidth,this.canvasHeight,heightRatio,widthRatio);
//     }
//     //
//     private draw_rank(width?:number,height?: number,heightRatio?: number,widthRatio?: number){
//         if(this.circleCanvasObjs && this.circleCanvasObjs.length) {
//             for(let i = 0; i < this.circleCanvasObjs.length; i++) {
//                 let node = this.circleCanvasObjs[i];
//                 if(i == 0) {
//                     this._draw_rank(this.backdropCanvas,node.title,node.content,node.x,node.y,node.radius,node.fillColor,node.fontSize,width,height,heightRatio,widthRatio);
//                 }

//                 if(i == 1) {
//                     this._draw_rank(this.canvas_rank2,node.title,node.content,node.x,node.y,node.radius,node.fillColor,node.fontSize,width,height,heightRatio,widthRatio);
//                 }

//                 if(i == 2) {
//                     this._draw_rank(this.canvas_rank3,node.title,node.content,node.x,node.y,node.radius,node.fillColor,node.fontSize,width,height,heightRatio,widthRatio);
//                 }

//             }
//         }
//     }
//     //绘制排名第一的圆
//     private _draw_rank(canvas: any,title: string,content: string,x: number,y: number,radius: number,fillColor: string,fontSize: number,width?:number,height?: number,heightRatio?,widthRatio?) {
//         //获取上下文
//         const canvasEl: HTMLCanvasElement = canvas.nativeElement;

//         if(height && width) {
//            canvasEl.width = width;
//            canvasEl.height = height;
//            x = x *  widthRatio;
//            y = y * heightRatio;
//            if(widthRatio < heightRatio) {
//                radius = radius * widthRatio;
//            }else {
//                radius = radius * heightRatio;
//            }
//         }

//         let ctx: CanvasRenderingContext2D = canvasEl.getContext('2d');
//         ctx.beginPath();

//         let grd = ctx.createLinearGradient(x, y - radius, x, y + radius);
//         grd.addColorStop(0, fillColor);
//         grd.addColorStop(1, "white");

// // 填充渐变
//         ctx.fillStyle = grd;

//         let circle = {
//             x: x, //圆心的X轴坐标值
//             y: y, //圆心的x轴坐标
//             r: radius //半径
//         };

//         ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
//         ctx.fill();

//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         ctx.font = `200 ${fontSize}px Arial`;
//         ctx.fillStyle = "#FFFFFF"; // text color

//         ctx.fillText(title, x,y - 10);
//         let subFontSize = fontSize - 2;
//         ctx.font = `200 ${subFontSize}px Arial`;
//         ctx.fillText(content, x, y + 5)


//     }


// }

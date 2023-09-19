import * as tslib_1 from "tslib";
import { Component, ContentChild, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { NavController } from '../../providers/nav-controller';
import { IonTabBar } from '../proxies';
import { IonRouterOutlet } from './ion-router-outlet';
let IonTabs = class IonTabs {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.ionTabsWillChange = new EventEmitter();
        this.ionTabsDidChange = new EventEmitter();
    }
    /**
     * @internal
     */
    onPageSelected(detail) {
        const stackId = detail.enteringView.stackId;
        if (detail.tabSwitch && stackId !== undefined) {
            if (this.tabBar) {
                this.tabBar.selectedTab = stackId;
            }
            this.ionTabsWillChange.emit({ tab: stackId });
            this.ionTabsDidChange.emit({ tab: stackId });
        }
    }
    /**
     * When a tab button is clicked, there are several scenarios:
     * 1. If the selected tab is currently active (the tab button has been clicked
     *    again), then it should go to the root view for that tab.
     *
     *   a. Get the saved root view from the router outlet. If the saved root view
     *      matches the tabRootUrl, set the route view to this view including the
     *      navigation extras.
     *   b. If the saved root view from the router outlet does
     *      not match, navigate to the tabRootUrl. No navigation extras are
     *      included.
     *
     * 2. If the current tab tab is not currently selected, get the last route
     *    view from the router outlet.
     *
     *   a. If the last route view exists, navigate to that view including any
     *      navigation extras
     *   b. If the last route view doesn't exist, then navigate
     *      to the default tabRootUrl
     */
    select(tabOrEvent) {
        const isTabString = typeof tabOrEvent === 'string';
        const tab = (isTabString) ? tabOrEvent : tabOrEvent.detail.tab;
        const alreadySelected = this.outlet.getActiveStackId() === tab;
        const tabRootUrl = `${this.outlet.tabsPrefix}/${tab}`;
        /**
         * If this is a nested tab, prevent the event
         * from bubbling otherwise the outer tabs
         * will respond to this event too, causing
         * the app to get directed to the wrong place.
         */
        if (!isTabString) {
            tabOrEvent.stopPropagation();
        }
        if (alreadySelected) {
            const activeStackId = this.outlet.getActiveStackId();
            const activeView = this.outlet.getLastRouteView(activeStackId);
            // If on root tab, do not navigate to root tab again
            if (activeView.url === tabRootUrl) {
                return;
            }
            const rootView = this.outlet.getRootView(tab);
            const navigationExtras = rootView && tabRootUrl === rootView.url && rootView.savedExtras;
            return this.navCtrl.navigateRoot(tabRootUrl, Object.assign({}, (navigationExtras), { animated: true, animationDirection: 'back' }));
        }
        else {
            const lastRoute = this.outlet.getLastRouteView(tab);
            /**
             * If there is a lastRoute, goto that, otherwise goto the fallback url of the
             * selected tab
             */
            const url = lastRoute && lastRoute.url || tabRootUrl;
            const navigationExtras = lastRoute && lastRoute.savedExtras;
            return this.navCtrl.navigateRoot(url, Object.assign({}, (navigationExtras), { animated: true, animationDirection: 'back' }));
        }
    }
    getSelected() {
        return this.outlet.getActiveStackId();
    }
};
IonTabs.ctorParameters = () => [
    { type: NavController }
];
tslib_1.__decorate([
    ViewChild('outlet', { read: IonRouterOutlet, static: false })
], IonTabs.prototype, "outlet", void 0);
tslib_1.__decorate([
    ContentChild(IonTabBar, { static: false })
], IonTabs.prototype, "tabBar", void 0);
tslib_1.__decorate([
    Output()
], IonTabs.prototype, "ionTabsWillChange", void 0);
tslib_1.__decorate([
    Output()
], IonTabs.prototype, "ionTabsDidChange", void 0);
tslib_1.__decorate([
    HostListener('ionTabButtonClick', ['$event'])
], IonTabs.prototype, "select", null);
IonTabs = tslib_1.__decorate([
    Component({
        selector: 'ion-tabs',
        template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner">
      <ion-router-outlet #outlet tabs="true" (stackEvents)="onPageSelected($event)"></ion-router-outlet>
    </div>
    <ng-content></ng-content>`,
        styles: [`
    :host {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      flex-direction: column;

      width: 100%;
      height: 100%;

      contain: layout size style;
      z-index: $z-index-page-container;
    }
    .tabs-inner {
      position: relative;

      flex: 1;

      contain: layout size style;
    }`]
    })
], IonTabs);
export { IonTabs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXRhYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbmF2aWdhdGlvbi9pb24tdGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXFDdEQsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBTztJQVFsQixZQUNVLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFKdEIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDeEQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFJN0QsQ0FBQztJQUVMOztPQUVHO0lBQ0gsY0FBYyxDQUFDLE1BQWtCO1FBQy9CLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQzVDLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FB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dCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9uYXYtY29udHJvbGxlcic7XG5pbXBvcnQgeyBJb25UYWJCYXIgfSBmcm9tICcuLi9wcm94aWVzJztcblxuaW1wb3J0IHsgSW9uUm91dGVyT3V0bGV0IH0gZnJvbSAnLi9pb24tcm91dGVyLW91dGxldCc7XG5pbXBvcnQgeyBTdGFja0V2ZW50IH0gZnJvbSAnLi9zdGFjay11dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi10YWJzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD10b3BdXCI+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJzLWlubmVyXCI+XG4gICAgICA8aW9uLXJvdXRlci1vdXRsZXQgI291dGxldCB0YWJzPVwidHJ1ZVwiIChzdGFja0V2ZW50cyk9XCJvblBhZ2VTZWxlY3RlZCgkZXZlbnQpXCI+PC9pb24tcm91dGVyLW91dGxldD5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG5cbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICBjb250YWluOiBsYXlvdXQgc2l6ZSBzdHlsZTtcbiAgICAgIHotaW5kZXg6ICR6LWluZGV4LXBhZ2UtY29udGFpbmVyO1xuICAgIH1cbiAgICAudGFicy1pbm5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW9uVGFicyB7XG5cbiAgQFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBJb25Sb3V0ZXJPdXRsZXQsIHN0YXRpYzogZmFsc2UgfSkgb3V0bGV0OiBJb25Sb3V0ZXJPdXRsZXQ7XG4gIEBDb250ZW50Q2hpbGQoSW9uVGFiQmFyLCB7IHN0YXRpYzogZmFsc2UgfSkgdGFiQmFyOiBJb25UYWJCYXIgfCB1bmRlZmluZWQ7XG5cbiAgQE91dHB1dCgpIGlvblRhYnNXaWxsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHRhYjogc3RyaW5nIH0+KCk7XG4gIEBPdXRwdXQoKSBpb25UYWJzRGlkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHRhYjogc3RyaW5nIH0+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuYXZDdHJsOiBOYXZDb250cm9sbGVyLFxuICApIHsgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uUGFnZVNlbGVjdGVkKGRldGFpbDogU3RhY2tFdmVudCkge1xuICAgIGNvbnN0IHN0YWNrSWQgPSBkZXRhaWwuZW50ZXJpbmdWaWV3LnN0YWNrSWQ7XG4gICAgaWYgKGRldGFpbC50YWJTd2l0Y2ggJiYgc3RhY2tJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy50YWJCYXIpIHtcbiAgICAgICAgdGhpcy50YWJCYXIuc2VsZWN0ZWRUYWIgPSBzdGFja0lkO1xuICAgICAgfVxuICAgICAgdGhpcy5pb25UYWJzV2lsbENoYW5nZS5lbWl0KHsgdGFiOiBzdGFja0lkIH0pO1xuICAgICAgdGhpcy5pb25UYWJzRGlkQ2hhbmdlLmVtaXQoeyB0YWI6IHN0YWNrSWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYSB0YWIgYnV0dG9uIGlzIGNsaWNrZWQsIHRoZXJlIGFyZSBzZXZlcmFsIHNjZW5hcmlvczpcbiAgICogMS4gSWYgdGhlIHNlbGVjdGVkIHRhYiBpcyBjdXJyZW50bHkgYWN0aXZlICh0aGUgdGFiIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkXG4gICAqICAgIGFnYWluKSwgdGhlbiBpdCBzaG91bGQgZ28gdG8gdGhlIHJvb3QgdmlldyBmb3IgdGhhdCB0YWIuXG4gICAqXG4gICAqICAgYS4gR2V0IHRoZSBzYXZlZCByb290IHZpZXcgZnJvbSB0aGUgcm91dGVyIG91dGxldC4gSWYgdGhlIHNhdmVkIHJvb3Qgdmlld1xuICAgKiAgICAgIG1hdGNoZXMgdGhlIHRhYlJvb3RVcmwsIHNldCB0aGUgcm91dGUgdmlldyB0byB0aGlzIHZpZXcgaW5jbHVkaW5nIHRoZVxuICAgKiAgICAgIG5hdmlnYXRpb24gZXh0cmFzLlxuICAgKiAgIGIuIElmIHRoZSBzYXZlZCByb290IHZpZXcgZnJvbSB0aGUgcm91dGVyIG91dGxldCBkb2VzXG4gICAqICAgICAgbm90IG1hdGNoLCBuYXZpZ2F0ZSB0byB0aGUgdGFiUm9vdFVybC4gTm8gbmF2aWdhdGlvbiBleHRyYXMgYXJlXG4gICAqICAgICAgaW5jbHVkZWQuXG4gICAqXG4gICAqIDIuIElmIHRoZSBjdXJyZW50IHRhYiB0YWIgaXMgbm90IGN1cnJlbnRseSBzZWxlY3RlZCwgZ2V0IHRoZSBsYXN0IHJvdXRlXG4gICAqICAgIHZpZXcgZnJvbSB0aGUgcm91dGVyIG91dGxldC5cbiAgICpcbiAgICogICBhLiBJZiB0aGUgbGFzdCByb3V0ZSB2aWV3IGV4aXN0cywgbmF2aWdhdGUgdG8gdGhhdCB2aWV3IGluY2x1ZGluZyBhbnlcbiAgICogICAgICBuYXZpZ2F0aW9uIGV4dHJhc1xuICAgKiAgIGIuIElmIHRoZSBsYXN0IHJvdXRlIHZpZXcgZG9lc24ndCBleGlzdCwgdGhlbiBuYXZpZ2F0ZVxuICAgKiAgICAgIHRvIHRoZSBkZWZhdWx0IHRhYlJvb3RVcmxcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2lvblRhYkJ1dHRvbkNsaWNrJywgWyckZXZlbnQnXSlcbiAgc2VsZWN0KHRhYk9yRXZlbnQ6IHN0cmluZyB8IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgaXNUYWJTdHJpbmcgPSB0eXBlb2YgdGFiT3JFdmVudCA9PT0gJ3N0cmluZyc7XG4gICAgY29uc3QgdGFiID0gKGlzVGFiU3RyaW5nKSA/IHRhYk9yRXZlbnQgOiAodGFiT3JFdmVudCBhcyBDdXN0b21FdmVudCkuZGV0YWlsLnRhYjtcbiAgICBjb25zdCBhbHJlYWR5U2VsZWN0ZWQgPSB0aGlzLm91dGxldC5nZXRBY3RpdmVTdGFja0lkKCkgPT09IHRhYjtcbiAgICBjb25zdCB0YWJSb290VXJsID0gYCR7dGhpcy5vdXRsZXQudGFic1ByZWZpeH0vJHt0YWJ9YDtcblxuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgYSBuZXN0ZWQgdGFiLCBwcmV2ZW50IHRoZSBldmVudFxuICAgICAqIGZyb20gYnViYmxpbmcgb3RoZXJ3aXNlIHRoZSBvdXRlciB0YWJzXG4gICAgICogd2lsbCByZXNwb25kIHRvIHRoaXMgZXZlbnQgdG9vLCBjYXVzaW5nXG4gICAgICogdGhlIGFwcCB0byBnZXQgZGlyZWN0ZWQgdG8gdGhlIHdyb25nIHBsYWNlLlxuICAgICAqL1xuICAgIGlmICghaXNUYWJTdHJpbmcpIHtcbiAgICAgICh0YWJPckV2ZW50IGFzIEN1c3RvbUV2ZW50KS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoYWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBhY3RpdmVTdGFja0lkID0gdGhpcy5vdXRsZXQuZ2V0QWN0aXZlU3RhY2tJZCgpO1xuICAgICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMub3V0bGV0LmdldExhc3RSb3V0ZVZpZXcoYWN0aXZlU3RhY2tJZCk7XG5cbiAgICAgIC8vIElmIG9uIHJvb3QgdGFiLCBkbyBub3QgbmF2aWdhdGUgdG8gcm9vdCB0YWIgYWdhaW5cbiAgICAgIGlmIChhY3RpdmVWaWV3LnVybCA9PT0gdGFiUm9vdFVybCkgeyByZXR1cm47IH1cblxuICAgICAgY29uc3Qgcm9vdFZpZXcgPSB0aGlzLm91dGxldC5nZXRSb290Vmlldyh0YWIpO1xuICAgICAgY29uc3QgbmF2aWdhdGlvbkV4dHJhcyA9IHJvb3RWaWV3ICYmIHRhYlJvb3RVcmwgPT09IHJvb3RWaWV3LnVybCAmJiByb290Vmlldy5zYXZlZEV4dHJhcztcbiAgICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVSb290KHRhYlJvb3RVcmwsIHtcbiAgICAgICAgLi4uKG5hdmlnYXRpb25FeHRyYXMpLFxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uOiAnYmFjaycsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdFJvdXRlID0gdGhpcy5vdXRsZXQuZ2V0TGFzdFJvdXRlVmlldyh0YWIpO1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGVyZSBpcyBhIGxhc3RSb3V0ZSwgZ290byB0aGF0LCBvdGhlcndpc2UgZ290byB0aGUgZmFsbGJhY2sgdXJsIG9mIHRoZVxuICAgICAgICogc2VsZWN0ZWQgdGFiXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHVybCA9IGxhc3RSb3V0ZSAmJiBsYXN0Um91dGUudXJsIHx8IHRhYlJvb3RVcmw7XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uRXh0cmFzID0gbGFzdFJvdXRlICYmIGxhc3RSb3V0ZS5zYXZlZEV4dHJhcztcblxuICAgICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZVJvb3QodXJsLCB7XG4gICAgICAgIC4uLihuYXZpZ2F0aW9uRXh0cmFzKSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbjogJ2JhY2snLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5vdXRsZXQuZ2V0QWN0aXZlU3RhY2tJZCgpO1xuICB9XG59XG4iXX0=
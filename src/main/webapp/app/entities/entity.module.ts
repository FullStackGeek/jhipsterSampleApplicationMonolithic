import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationMonolithicRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterSampleApplicationMonolithicCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterSampleApplicationMonolithicLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterSampleApplicationMonolithicDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterSampleApplicationMonolithicTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterSampleApplicationMonolithicEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterSampleApplicationMonolithicJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterSampleApplicationMonolithicJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterSampleApplicationMonolithicRegionMySuffixModule,
        JhipsterSampleApplicationMonolithicCountryMySuffixModule,
        JhipsterSampleApplicationMonolithicLocationMySuffixModule,
        JhipsterSampleApplicationMonolithicDepartmentMySuffixModule,
        JhipsterSampleApplicationMonolithicTaskMySuffixModule,
        JhipsterSampleApplicationMonolithicEmployeeMySuffixModule,
        JhipsterSampleApplicationMonolithicJobMySuffixModule,
        JhipsterSampleApplicationMonolithicJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationMonolithicEntityModule {}

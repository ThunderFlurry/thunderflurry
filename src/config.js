/**
 *	ThunderFlurry (https://thunderflurry.github.io/)
 *
 * Copyright © 2015 - 2016 Cinecove Digital, LLC. All rights reserved
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file 
 * except in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the 
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
 * either express or implied. See the License for the specific language governing permissions 
 * and limitations under the License.
 */

/* eslint-disable max-len */
/* jscs:disable maximumLineLength */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const analytics = {

  // https://analytics.google.com/
  google: { trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-75301203-1' },

};


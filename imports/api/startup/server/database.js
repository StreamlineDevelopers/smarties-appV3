import { Meteor } from 'meteor/meteor';
import DatabaseInitializer from '../../../api/server/classes/db/DatabaseInitializer';
import { schemas as permissiveSchemas, strictSchemas, indexes } from '../../../api/server/classes/db/permissive-schemas.js';
import { Package } from "@tmq-dev-ph/tmq-dev-core-server";

// Package.addDB("database", [{ key: { primaryKey: 1 } }]);

Package.addDB("Product", [{ key: { dtCreated: -1 } }]);


// /imports/startup/server/index.js (or server/main.js)


Meteor.startup(async () => {
    // Choose schema validation level based on environment
    const isDevelopment = Meteor.isDevelopment;
    // const useStrictValidation = process.env.STRICT_SCHEMA_VALIDATION === 'true';
    const useStrictValidation = true;

    let schemasToUse;
    if (useStrictValidation) {
        schemasToUse = strictSchemas;
        console.log('🔒 Using STRICT schema validation');
    } else if (isDevelopment) {
        schemasToUse = permissiveSchemas;
        console.log('🔧 Using PERMISSIVE schema validation for development');
    } else {
        schemasToUse = permissiveSchemas; // Still permissive for production until schemas are finalized
        console.log('🔧 Using PERMISSIVE schema validation');
    }

    console.log('📋 Schema validation enabled with detailed error reporting');

    const init = new DatabaseInitializer({ schemas: schemasToUse, indexes });
    await init.run(); // creates/updates validators, then ensures indexes
});

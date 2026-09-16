/*
 * Publisher lookup helpers for the Tailspin Toys catalog.
 * These database queries supply the publisher names used in static pages and data transforms.
 */
import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';
import type { Database } from './db';

/**
 * Retrieves every publisher, ordered alphabetically by name.
 *
 * @param db - The database instance used to query publisher records.
 * @returns A list of publisher records sorted by name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}

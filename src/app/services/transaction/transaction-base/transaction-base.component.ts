import { Component } from '@angular/core';
import { IgxTransactionService, State, Transaction, TransactionType } from 'igniteui-angular';
import { WISHLIST, WishlistItem } from '../data';

@Component({
    selector: 'app-transaction-base',
    styleUrls: ['./transaction-base.component.css'],
    templateUrl: 'transaction-base.component.html'
})
export class TransactionBaseComponent {
    public wishlist: WishlistItem[];

    /**
     * @param transactions Injected Transaction Service.
     */
    constructor(public transactions: IgxTransactionService<Transaction, State>) {
        this.wishlist = WISHLIST;
    }

    /** Check item for unsaved deletion */
    public isDeleted(id): boolean {
        const state = this.transactions.getState(id);
        return state && state.type === TransactionType.DELETE;
    }

    /** Check item for unsaved editing */
    public isEdited(id): boolean {
        const state = this.transactions.getState(id);
        return state && state.type === TransactionType.UPDATE;
    }

    /*********************************************************************************************
     * The below methods - `onAdd`, `onEdit`, `onDelete` demonstrate the different types of transactions
     * and what kind of data we normally pass to each of them.
     *
     * Each transaction has `id`, `type` and `newValue` properties.
     */

    /**
     * Create an `UPDATE` transaction.
     */
    public onEdit(): void {
        const newPrice = '$999';
        // there can be multiple `UPDATE` transactions for the same item `id`
        // the `newValue` property should hold only the changed properties
        const editTransaction: Transaction = {
            id: this.wishlist[0].id,
            type: TransactionType.UPDATE,
            newValue: { price: newPrice }
        };
        // provide the first wishlist item as a `recordRef` argument
        this.transactions.add(editTransaction, this.wishlist[0]);
    }

    /**
     * Create an `ADD` transaction.
     */
    public onAdd(): void {
        // it must have a unique 'id' property
        const item: WishlistItem = { id: 4, name: 'Yacht', price: 'A lot!' };

        // in an `ADD` transaction you do not need to provide a `recordRef` argument,
        // since there is nothing to refer to yet
        this.transactions.add({ id: 4, type: TransactionType.ADD, newValue: item });
    }

    /**
     * Create a `DELETE` transaction.
     */
    public onDelete(): void {
        // after a `DELETE` transaction, no further changes should be made for the same `id`
        // the `newValue` property should be set to `null` since we do not change any values,
        const deleteTransaction: Transaction = {
            id: this.wishlist[1].id,
            type: TransactionType.DELETE,
            newValue: null
        };
        // provide the second wishlist item as a `recordRef` argument
        this.transactions.add(deleteTransaction, this.wishlist[1]);
    }

    /**
     * Clear all pending transactions.
     */
    public onClear(): void {
        this.transactions.clear();
    }

    /**
     * Commit all pending transactions.
     */
    public onCommit(): void {
        // the `commit` function expects the original data array as its parameter
        this.transactions.commit(this.wishlist);
    }

    /*********************************************************************************************
     * The below methods are used for visualization purposes.
     */

    /** Check if item with ID has been added (even unsaved) */
    public itemAdded(id: number): boolean {
        const found = this.transactions.getState(id) || this.wishlist.find(x => x.id === 4);
        return !!found;
    }

    /* Get transactions, merge with wishlist data for display purposes */
    public getTransactionLog(): any[] {
        return this.transactions.getTransactionLog().map(transaction => {
            const item = this.wishlist.find(x => x.id === transaction.id);
            return Object.assign({ type: transaction.type }, item, transaction.newValue);
        });
    }
}

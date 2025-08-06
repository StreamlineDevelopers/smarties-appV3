import core from "@tmq-dev-ph/tmq-dev-core-client";
import { useState, useEffect, useRef } from 'react';

const { Watcher } = core;

class Watcher2 extends Watcher {
    constructor(props) {
        super(props);
        this.subscribers = new Set();
        this.state = new Map();
    }

    // Subscribe a component's update function
    setWatcher(callback) {
        this.subscribers.add(callback);
        return () => {
            this.subscribers.delete(callback);
        };
    }

    // Notify all subscribers to update triggers re-render
    activateWatch() {
        this.subscribers.forEach(callback => callback());
    }

    // Set a value and trigger updates
    setValue(key, value) {
        this.state.set(key, value);
        this.activateWatch();
    }

    // Get a value
    getValue(key) {
        return this.state.get(key);
    }

    // Delete a value
    deleteValue(key) {
        this.state.delete(key);
        this.activateWatch();
    }

    // Clear all values
    clear() {
        this.state.clear();
        this.activateWatch();
    }
}

// React Hook to use the Watcher
export function useWatcher(watcher) {
    const [, forceUpdate] = useState({});

    useEffect(() => {
        // Subscribe to updates
        const unsubscribe = watcher.setWatcher(() => {
            forceUpdate({});
        });

        // Cleanup subscription
        return () => {
            unsubscribe();
        };
    }, [watcher]);

    return watcher;
}

// Example usage:
const MyComponent = () => {
    const watcher = useRef(new Watcher()).current;
    useWatcher(watcher);

    const handleClick = () => {
        watcher.setValue('counter', (watcher.getValue('counter') || 0) + 1);
    };

    return (
        <div>
            <p>Counter: {watcher.getValue('counter') || 0}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export { Watcher2 };
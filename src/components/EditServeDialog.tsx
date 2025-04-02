import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ServeAttemptData } from "@/components/ServeAttempt";
import { useToast } from "@/hooks/use-toast";

interface EditServeDialogProps {
  serve: ServeAttemptData;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (serve: ServeAttemptData) => Promise<boolean>;
}

const EditServeDialog: React.FC<EditServeDialogProps> = ({
  serve,
  open,
  onOpenChange,
  onSave,
}) => {
  const [notes, setNotes] = useState<string>(serve?.notes || "");
  const [status, setStatus] = useState<string>(serve?.status || "Attempted");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    if (serve) {
      setNotes(serve.notes || "");
      setStatus(serve.status || "Attempted");
    }
  }, [serve]);

  const handleSave = async () => {
    if (!serve) return;
    
    setIsLoading(true);
    try {
      const updatedServe = {
        ...serve,
        notes,
        status,
      };
      
      const success = await onSave(updatedServe);
      
      if (success) {
        toast({
          title: "Success",
          description: "Serve attempt has been updated",
          variant: "default",
        });
        onOpenChange(false);
      } else {
        throw new Error("Failed to update serve attempt");
      }
    } catch (error) {
      console.error("Error updating serve attempt:", error);
      toast({
        title: "Error",
        description: "Failed to update serve attempt",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Serve Attempt</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={status}
              onValueChange={setStatus}
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Attempted">Attempted</SelectItem>
                <SelectItem value="Served">Served</SelectItem>
                <SelectItem value="Failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional notes about this serve attempt"
              rows={5}
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button 
            type="button" 
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditServeDialog;
